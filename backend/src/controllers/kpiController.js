const Sale = require("../model/Sale");

exports.getKpis = async (req, res) => {
  try {
    const kpis = await Sale.aggregate([
      {
        $group: {
          _id: null,
          totalOrders: { $sum: 1 },
          totalQuantity: { $sum: { $toInt: "$Quantity" } },
          totalRevenue: { $sum: { $toDouble: "$Final Amount" } },
          totalDiscount: {
            $sum: {
              $subtract: [
                { $toDouble: "$Total Amount" },
                { $toDouble: "$Final Amount" },
              ],
            },
          },
        },
      },
    ]);

    const result = kpis[0] || {
      totalOrders: 0,
      totalQuantity: 0,
      totalRevenue: 0,
      totalDiscount: 0,
    };

    res.json(result);
  } catch (err) {
    console.error("KPI ERROR:", err.message);
    res.status(500).json({ error: "KPI calculation failed" });
  }
};
