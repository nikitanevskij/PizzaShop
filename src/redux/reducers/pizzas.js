const initialstate = {
  items: [],
  isLoded: false,
};

const pizzas = (state = initialstate, action) => {
  if (action.type === "SET_PIZZAS") {
    return {
      ...state,
      items: action.paylod,
    };
  }
  return state;
};

export default pizzas;
