import React from "react";

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectActive = (id) => {
    setActiveItem(id);
    onClickItem(id);
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectActive(null)}
        >
          Все
        </li>
        {items &&
          items.map((items, index) => (
            <li
              key={`${items} ${index}`}
              onClick={() => onSelectActive(index)}
              className={activeItem === index ? "active" : ""}
            >
              {items}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
