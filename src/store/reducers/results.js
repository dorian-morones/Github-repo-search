import * as actionTypes from "../actions/actionTypes";

const Results = {
    data: [],
    dataFiltered: [],
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
          dataFiltered: action.payload.results,
        };
      case actionTypes.FILTER_RESULTS:
        return { ...state, dataFiltered: action.payload };
      default:
        return {
          ...state
        };
    }
  };

  export default resultsReducer;
