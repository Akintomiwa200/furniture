import React, { useState } from 'react';

const FilterOptions = ({ categories, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Pass selected category to parent component for filtering
    onFilter(category);
  };

  return (
    <div className="filter-options">
      <h3>Filter by Category</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterOptions;
