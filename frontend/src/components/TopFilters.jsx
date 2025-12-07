export default function TopFilters({
  filters,
  onFilterChange,
  onSortChange,
  onSearch,
}) {
  const updateMulti = (key, value) => {
    const updated = { ...filters };
    if (!updated[key]) updated[key] = [];

    if (updated[key].includes(value)) {
      updated[key] = updated[key].filter((v) => v !== value);
    } else {
      updated[key] = [...updated[key], value];
    }

    onFilterChange(updated);
  };

  const updateSingle = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="top-filter-row">
      {/* Search */}
      <input
        className="top-search"
        placeholder="Name, Phone no."
        onChange={(e) => onSearch(e.target.value)}
      />

      <div className="filter-chip-row">

        {/* Customer Region */}
        <div className="filter-chip">
          <select onChange={(e) => updateMulti("customerRegion", e.target.value)}>
            <option value="">Customer Region</option>
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
            <option>Central</option>
          </select>
        </div>

        {/* Gender */}
        <div className="filter-chip">
          <select onChange={(e) => updateMulti("gender", e.target.value)}>
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Age Range (Preset) */}
<div className="filter-chip">
  <select
    onChange={(e) => {
      const value = e.target.value;

      if (!value) {
        onFilterChange({ ...filters, ageMin: "", ageMax: "" });
        return;
      }

      const [min, max] = value.split("-");

      onFilterChange({
        ...filters,
        ageMin: Number(min),
        ageMax: Number(max),
      });
    }}
  >
    <option value="">Age Range</option>
    <option value="18-25">18–25</option>
    <option value="26-40">26–40</option>
    <option value="41-60">41–60</option>
  </select>
</div>


        {/*Product Category */}
        <div className="filter-chip">
          <select onChange={(e) => updateMulti("productCategory", e.target.value)}>
            <option value="">Product Category</option>
            <option>Clothing</option>
            <option>Electronics</option>
            <option>Beauty</option>
          </select>
        </div>

        {/*  Tags */}
        <div className="filter-chip">
          <select onChange={(e) => updateMulti("tags", e.target.value)}>
            <option value="">Tags</option>
            <option>organic</option>
            <option>wireless</option>
            <option>fashion</option>
            <option>portable</option>
          </select>
        </div>

        {/* Payment Method */}
        <div className="filter-chip">
          <select onChange={(e) => updateMulti("paymentMethod", e.target.value)}>
            <option value="">Payment Method</option>
            <option>UPI</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
          </select>
        </div>

        {/* Date */}
        <div className="filter-chip">
          <input
            type="date"
            onChange={(e) => updateSingle("dateFrom", e.target.value)}
          />
        </div>

        {/* Sort */}
        <div className="filter-chip sort-chip">
          <select onChange={(e) => onSortChange(e.target.value)}>
            <option value="customerName_asc">Sort by: Customer Name (A–Z)</option>
            <option value="date_desc">Date (Newest)</option>
            <option value="quantity_desc">Quantity</option>
          </select>
        </div>
      </div>
    </div>
  );
}
