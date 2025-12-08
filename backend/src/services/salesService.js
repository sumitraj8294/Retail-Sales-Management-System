const Sale = require("../model/Sale");
const { search } = require("../routes/SalesRoutes");

exports.fetchSales = async ({ q, filters, sort, page, pageSize }) => {
  let mongoQuery = {};

  // name and number search
  if (q && q.trim() !== "") {
  mongoQuery.$or = [
    {
      "Customer Name": { $regex: q, $options: "i" },
    },
    {
    //  number to string and regex match
      $expr: {
        $regexMatch: {
          input: { $toString: "$Phone Number" },
          regex: q,
        },
      },
    },
  ];
}

  if (filters) {
    const parsed = typeof filters === "string" ? JSON.parse(filters) : filters;

    // Customer Region (multi)
    if (parsed.customerRegion && parsed.customerRegion.length > 0) {
      mongoQuery["Customer Region"] = { $in: parsed.customerRegion };
    }

    // Gender (multi)
    if (parsed.gender && parsed.gender.length > 0) {
      mongoQuery["Gender"] = { $in: parsed.gender };
    }

    // Product Category (multi)
    if (parsed.productCategory && parsed.productCategory.length > 0) {
      mongoQuery["Product Category"] = { $in: parsed.productCategory };
    }

    // Tags (multi, partial match)
    if (parsed.tags && parsed.tags.length > 0) {
      mongoQuery["Tags"] = {
        $regex: parsed.tags.join("|"),
        $options: "i",
      };
    }

    // Payment Method (multi)
    if (parsed.paymentMethod && parsed.paymentMethod.length > 0) {
      mongoQuery["Payment Method"] = { $in: parsed.paymentMethod };
    }

    // Age Range
if (
  (parsed.ageMin !== "" && parsed.ageMin !== undefined) ||
  (parsed.ageMax !== "" && parsed.ageMax !== undefined)
) {
  const min = Number(parsed.ageMin);
  const max = Number(parsed.ageMax);

  // Invalid range - force no results
  if ((min && max && min > max) || min < 0 || max < 0) {
    return {
      data: [],
      meta: { total: 0, page, pageSize, totalPages: 1 },
    };
  }

  mongoQuery.$expr = {
    $and: [
      parsed.ageMin !== "" && parsed.ageMin !== undefined
        ? { $gte: [{ $toInt: "$Age" }, min] }
        : { $gte: [1, 1] },

      parsed.ageMax !== "" && parsed.ageMax !== undefined
        ? { $lte: [{ $toInt: "$Age" }, max] }
        : { $lte: [1, 999] },
    ],
  };
}



    // Date Range
    if (parsed.dateFrom || parsed.dateTo) {
      mongoQuery["Date"] = {};
      if (parsed.dateFrom) {
        mongoQuery["Date"].$gte = new Date(parsed.dateFrom);
      }
      if (parsed.dateTo) {
        mongoQuery["Date"].$lte = new Date(parsed.dateTo);
      }
    }
  }

  // sorting
  let sortQuery = {};

  if (sort) {
    const [field, direction] = sort.split("_");

    const sortMap = {
      date: "Date",
      quantity: "Quantity",
      customerName: "Customer Name",
    };

    const sortKey = sortMap[field];

    if (sortKey) {
      sortQuery[sortKey] = direction === "asc" ? 1 : -1;
    }
  }

  // pagination
  const total = await Sale.countDocuments(mongoQuery);

  const data = await Sale.find(mongoQuery)
    .sort(sortQuery)
    .skip((page - 1) * pageSize)
    .limit(pageSize);

  return {
    data,
    meta: {
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    },
  };
};
