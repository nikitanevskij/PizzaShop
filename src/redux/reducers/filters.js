const initialstate = {
  category: null,
};

const filters = (state = initialstate, action) => {
  if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      category: action.paylod,
    };
  }
  return state;
};

export default filters;
