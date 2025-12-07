export default function Pagination({ meta, onPageChange }) {
  const { page, totalPages } = meta;

  return (
    <div
      style={{
        marginTop: 15,
        display: "flex",
        gap: "12px",
        justifyContent: "center",
      }}
    >
      <button disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
        Previous
      </button>

      <span>
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
