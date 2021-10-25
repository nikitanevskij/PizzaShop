const initialstate = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialstate, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state,
        items: action.paylod,
        isLoaded: true,
      };

    case "SET_LOADED":
      return {
        ...state,
        items: action.paylod,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default pizzas;
