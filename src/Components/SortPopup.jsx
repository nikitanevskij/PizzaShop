import React from "react";

function SortPopup({ items }) {
  const [visiblePopup, setVisiblePopus] = React.useState(false); //хранилище состояния сортировки открыто/закрыто
  const [activeItem, setActiveItem] = React.useState(0); // хранилище состояния className:"active"

  const onSelectActive = (id) => {
    setActiveItem(id);
    setVisiblePopus(false);
  }; // функция для изменения состояни active и скрытия списка сортировки

  const toggleVisiblePopup = () => {
    setVisiblePopus(!visiblePopup);
  }; // функия переключателя состояния сортировки

  const sortRef = React.useRef(); // получаем ссылку на DOM-элемент
  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopus(false);
    }
  }; //обрабатываем полученый масссив DOM эл. и ищем нужный нам

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }); // получаем данные клика

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={visiblePopup ? "rotated" : " "}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{items[activeItem]}</span>
      </div>

      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((items, index) => (
                <li
                  className={activeItem === index ? "active" : ""}
                  key={`${items} ${index}`}
                  onClick={() => onSelectActive(index)}
                >
                  {items}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortPopup;