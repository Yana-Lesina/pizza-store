import React from "react";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";

import { SearchedContext } from "../App";

const MainPage = () => {
  const { searchedWord } = React.useContext(SearchedContext);

  const [items, setItems] = React.useState([]);
  const [categoriesID, setCategoriesID] = React.useState(0);
  const [sorterActive, setSorterActive] = React.useState({
    name: "популярности",
    paramName: "rating",
  });

  const categoryParams = categoriesID > 0 ? `category=${categoriesID}` : "";
  const sorterParams = `${sorterActive.paramName}&order=desc`;

  const searchedPizza = items.filter((pizza) => {
    return pizza?.title.toLowerCase().includes(searchedWord.toLowerCase());
  });

  const pizzaItems = searchedPizza.map((pizza) => {
    return <PizzaBlock key={pizza.id} {...pizza} />;
  });

  React.useEffect(() => {
    fetch(
      `https://62cd8edaa43bf780085adaa5.mockapi.io/pizza-items?${categoryParams}&sortBy=${sorterParams}`
    )
      .then((res) => res.json())
      .then((data) => setItems(data));

    window.scrollTo(0, 0);
  }, [categoriesID, sorterActive]);

  return (
    <>
      <div className="content__top">
        <Categories
          categoriesID={categoriesID}
          changeActiveID={(id) => {
            setCategoriesID(id);
          }}
        />
        <Sort
          sorterActive={sorterActive}
          changeSorterActive={(id) => setSorterActive(id)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{pizzaItems}</div>
    </>
  );
};

export default MainPage;
