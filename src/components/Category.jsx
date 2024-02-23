import Link from "next/link";

const Category = () => {
  const categories = [
    {
      category: "For You",
    },
    {
      category: "Popular",
    },
    {
      category: "Trend",
    },
    {
      category: "Pop",
    },
    {
      category: "Edm",
    },
    {
      category: "Rock",
    },
    {
      category: "More",
    },
  ];

  return (
    <div className="flex flex-nowrap md:grid md:grid-cols-7 gap-2 mb-3 overflow-scroll md:overflow-auto scrollbar-hide md:scrollbar-auto">
      {categories.map((item) => (
        <button
          key={item.category}
          className="flex-[0_0_30%] text-xs md:text-sm lg:text-base rounded-full bg-sidebar px-3 md:px-5 py-1"
        >
          {item.category}
        </button>
      ))}
    </div>
  );
};

export default Category;
