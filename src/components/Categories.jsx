import React from "react";

const Categories = () => {
  const [activeID, setActiveID] = React.useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const changeActiveID = (id) => {
    setActiveID(id);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, id) => {
          return (
            <li
              key={id}
              className={id === activeID ? "active" : " "}
              onClick={() => {
                changeActiveID(id);
              }}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
