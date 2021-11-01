import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";

import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizza } from "../redux/actions/cart";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";

const itemsCategory = [
  "Мясные",
  "Вегетерианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const itemsFilters = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "asc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

function Home() {
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizza(obj));
  };
  return (
    <div>
      <div className="content__top">
        <Categories
          items={itemsCategory}
          onClickItem={onSelectCategory}
          itemsCategory={category}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={itemsFilters}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
