const express = require("express");
const router = express.Router();
const salesController = require("../controllers/salesController");
const { getKpis } = require("../controllers/kpiController");


router.get("/", salesController.getSales);
router.get("/kpis", getKpis);



module.exports = router;
