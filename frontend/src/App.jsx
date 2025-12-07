import { useEffect, useState } from "react";
import { getSales } from "./services/api";

import Sidebar from "./components/Sidebar";
import MainFullTable from "./components/MainFullTable";
import FullTableModal from "./components/FullTableModal";
import TopFilters from "./components/TopFilters";
import KpiCards from "./components/KpiCards";
import Pagination from "./components/Pagination";

import "./styles/dashboard.css";

export default function App() {
  const [sales, setSales] = useState([]);
  const [meta, setMeta] = useState({ total: 0, totalPages: 1, page: 1 });
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    customerRegion: [],
    gender: [],
    productCategory: [],
    tags: [],
    paymentMethod: [],
    ageMin: "",
    ageMax: "",
    dateFrom: "",
    dateTo: "",
  });
  const [sort, setSort] = useState("date_desc");

  const [showModal, setShowModal] = useState(false);
  const pageSize = 10;

  // ALL REQUIREMENTS TRIGGER FETCH
  useEffect(() => {
    fetchSales();
  }, [page, query, filters, sort]);

  const fetchSales = async () => {
    const res = await getSales({
      q: query,
      filters: JSON.stringify(filters),
      sort,
      page,
      pageSize,
    });

    setSales(res.data);
    setMeta(res.meta);
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        {/* PAGE TITLE */}
        <div className="page-header">
          <h1>Retail Sales Management System</h1>
          <p>Dashboard Overview</p>
        </div>

        {/* TOP FILTERS */}
        <TopFilters
  filters={filters}
  onSearch={(q) => {
    setQuery(q);
    setPage(1);
  }}
  onSortChange={(s) => {
    setSort(s);
    setPage(1);
  }}
  onFilterChange={(f) => {
    setFilters(f);
    setPage(1);
  }}
/>


        {/* KPIs */}
        <KpiCards />

        {/* FULL TABLE ON MAIN PAGE */}
        <MainFullTable rows={sales} />

        {/* VIEW ALL BUTTON */}
        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <button className="view-all-btn" onClick={() => setShowModal(true)}>
            View Full Table
          </button>
        </div>

        {/* STATE-SAFE PAGINATION */}
        <Pagination meta={meta} onPageChange={setPage} />
      </div>

      {/* FULL TABLE MODAL */}
      {showModal && (
        <FullTableModal rows={sales} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
