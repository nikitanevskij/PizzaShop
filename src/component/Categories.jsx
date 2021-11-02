import React from "react";

function Categories({ itemsCategory, items, onClickItem }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={itemsCategory === null ? "active" : ""}
          onClick={() => onClickItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((items, index) => (
            <li
              key={`${items} ${index}`}
              onClick={() => onClickItem(index)}
              className={itemsCategory === index ? "active" : ""}
            >
              {items}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
