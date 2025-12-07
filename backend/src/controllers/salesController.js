const salesService = require("../services/salesService");

exports.getSales = async (req, res) => {
  try {
    const { q = "", filters, sort, page = 1, pageSize = 10 } = req.query;

    const result = await salesService.fetchSales({
      q,
      filters,
      sort,
      page: Number(page),
      pageSize: Number(pageSize),
    });

    res.json(result);
  } catch (err) {
    console.error("Controller Error:", err.message);
    res.status(500).json({ error: "Server Error" });
  }
};
