import React from "react";
import "./scss/app.scss";
import { Header } from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://62cd8edaa43bf780085adaa5.mockapi.io/pizza-items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((pizza) => {
              return <PizzaBlock key={pizza.id} {...pizza} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
