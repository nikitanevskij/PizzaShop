import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import setCategory from "../redux/actions/filters";

const itemsCategory = [
  "Мясные",
  "Вегетерианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const itemsFilters = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

function Home() {
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div>
      <div className="content__top">
        <Categories items={itemsCategory} onClickItem={onSelectCategory} />
        <SortPopup items={itemsFilters} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((items) => (
          <PizzaBlock key={items.id} {...items} />
        ))}
      </div>
    </div>
  );
}

export default Home;
