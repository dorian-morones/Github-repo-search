import * as actionTypes from "../actions/actionTypes";

const Results = {
    data: [],
    storedRepo: [],
    loading: false,
  };

export const resultsReducer = (state = Results, action) => {
    switch (action.type) {
      case actionTypes.LOADING_RESULTS:
        return { ...state, loading: action.payload };
      case actionTypes.RECEIVE_RESULTS:
        return {
          ...state,
          data: action.payload,
        };
      case actionTypes.FILTER_RESULTS:
        return { ...state, dataFiltered: action.payload };
      case actionTypes.STORE_REPO:
        return { ...state, storedRepo: action.payload };
      default:
        return {
          ...state
        };
    }
  };

  export default resultsReducer;
