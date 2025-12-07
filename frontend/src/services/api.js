import axios from "axios";
const BASE = "http://localhost:5000/api";

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
