const Categories = ({
  categories,
  filterItems,
  activeCategory,
}) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 mb-16">
      {categories.map((category, index) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={index}
            onClick={() => filterItems(category)}
            className={`capitalize px-4 py-2 rounded-md border transition duration-300
              
              ${
                isActive
                  ? "bg-yellow-700 text-white border-yellow-700"
                  : "text-yellow-700 border-yellow-700 hover:bg-yellow-700 hover:text-white"
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;