import axios from "axios";
const BASE = "https://retail-sales-management-system-xnp0.onrender.com/api";

export const getSales = async ({ q, filters, sort, page, pageSize }) => {
  const res = await axios.get(`${BASE}/sales`, {
    params: {
      q,
      filters,
      sort,
      page,
      pageSize,
    },
  });

  return res.data;
};
