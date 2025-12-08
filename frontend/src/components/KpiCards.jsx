import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/kpi.css";

export default function KpiCards() {
  const [kpis, setKpis] = useState({
    totalOrders: 0,
    totalQuantity: 0,
    totalRevenue: 0,
    totalDiscount: 0,
  });

  useEffect(() => {
    fetchKpis();
  }, []);

  const fetchKpis = async () => {
    try {
      const res = await axios.get(
  "https://retail-sales-management-system-xnp0.onrender.com/api/sales/kpis"
);

      setKpis(res.data);
    } catch (err) {
      console.error("KPI fetch error");
    }
  };

  return (
    <div className="kpi-grid">
      <div className="kpi-card">
        <p>Total Orders</p>
        <h2>{kpis.totalOrders}</h2>
      </div>

      <div className="kpi-card">
        <p>Total Quantity Sold</p>
        <h2>{kpis.totalQuantity}</h2>
      </div>

      <div className="kpi-card">
        <p>Total Revenue</p>
        <h2>₹{kpis.totalRevenue.toLocaleString()}</h2>
      </div>

      <div className="kpi-card">
        <p>Total Discount</p>
        <h2 style={{ color: "#dc2626" }}>
          ₹{kpis.totalDiscount.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}
