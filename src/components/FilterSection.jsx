import "../components/FilterSection.css";

function FilterSection({
  category,
  setCategory,
  price,
  setPrice,
  resetFilters,
}) {
  return (
    <div className="filter-bar">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Category</option>
        <option value="Gold">Gold</option>
        <option value="Silver">Silver</option>
        <option value="Diamond">Diamond</option>
        <option value="Rose Gold">Rose Gold</option>
      </select>

      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      >
        <option value="">Price</option>
        <option value="0-5000">₹0 - ₹5,000</option>
        <option value="5000-10000">₹5,000 - ₹10,000</option>
        <option value="10000-20000">₹10,000 - ₹20,000</option>
        <option value="20000">Above ₹20,000</option>
      </select>

      <button onClick={resetFilters}>
        Reset
      </button>

    </div>
  );
}

export default FilterSection;