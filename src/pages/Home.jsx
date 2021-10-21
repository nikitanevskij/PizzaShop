import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";
function Home({ pizzas }) {
  return (
    <div>
      <div className="content__top">
        <Categories
          items={["Мясные", "Вегетерианские", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((items, index) => (
          <PizzaBlock key={items.id} {...items} />
        ))}
      </div>
    </div>
  );
}

export default Home;
