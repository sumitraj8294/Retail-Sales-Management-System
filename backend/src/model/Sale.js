const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model("Sale", SaleSchema);
