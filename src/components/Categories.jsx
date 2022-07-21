import React from "react";

const Categories = ({ categoriesID, changeActiveID }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, id) => {
          return (
            <li
              key={id}
              className={id === categoriesID ? "active" : " "}
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
