import React from "react";

const FilterSection = () => {
  return (
    <div className="filter-section">
      <select className="select" name="price" id="">
        <option value="" hidden>
          Price
        </option>
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

export default FilterSection;
