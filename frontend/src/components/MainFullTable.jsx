import "../styles/table.css";

export default function MainFullTable({ rows }) {
  // ✅ EMPTY STATE (No search results / conflicting filters)
  if (!rows || rows.length === 0) {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          color: "#64748b",
          background: "white",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <h3>No records found</h3>
        <p>Try adjusting your search or filters.</p>
      </div>
    );
  }

  // ✅ NORMAL TABLE VIEW
  return (
    <div className="table-scroll-container">
      <div style={{ width: "100%", overflowX: "auto" }}>
        <table className="sales-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Category</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Region</th>
              <th>Product ID</th>
              <th>Employee</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td>{row["Transaction ID"]}</td>
                <td>{row["Date"]?.slice(0, 10)}</td>
                <td>{row["Customer ID"]}</td>
                <td>{row["Customer Name"]}</td>
                <td>{row["Phone Number"]}</td>
                <td>{row["Gender"]}</td>
                <td>{row["Age"]}</td>
                <td>{row["Product Category"]}</td>
                <td>{row["Quantity"]}</td>
                <td className="sales-amount">
                  ₹{row["Total Amount"] || 0}
                </td>
                <td>{row["Customer Region"]}</td>
                <td>{row["Product ID"]}</td>
                <td>{row["Employee Name"] || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
