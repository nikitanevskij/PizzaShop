const initialstate = {
  category: null,
  sortBy: {
    type: "popular",
    order: "desc",
  },
};

const filters = (state = initialstate, action) => {
  if (action.type === "SET_SORT_BY") {
    return {
      ...state,
      sortBy: action.payload,
    };
  }

  if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      category: action.paylod,
    };
  }
  return state;
};

export default filters;
