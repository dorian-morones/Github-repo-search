/* global ROOT_URL*/
import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const loadingResults = loading => {
  return {
    type: actionTypes.LOADING_RESULTS,
    payload: loading
  };
};

export const receiveResults = data => {
    return {
      type: actionTypes.RECEIVE_RESULTS,
      payload: data
    };
  };

export const receiveFilteredResults = data => {
    return {
      type: actionTypes.RECEIVE_RESULTS,
      payload: data
    };
  };

export const filterResults = (results) => {
  return {
      type: actionTypes.FILTER_RESULTS,
      payload: results
    };
  };

export const storeRepo = (repo) => {
  console.log("actions", repo)
  return {
    type: actionTypes.STORE_REPO,
    payload: repo
  };
};

export const getFilteredResults = (results) => {
  return function (dispatch) {
    dispatch(loadingResults(true));
    dispatch(filterResults(results));
    dispatch(loadingResults(false));
  };
}

export const getResults = (keyword) => {
    let key = keyword === undefined || keyword === '' ? "react" : keyword;
    const url = ROOT_URL + `q=${key}&page=1&per_page=15&sort=stars&order=desc`; 
    return function (dispatch) {
      dispatch(loadingResults(true));
      return axios({
        url: url,
        timeout: 10000
      })
        .then(function (response) {
            dispatch(receiveResults(response.data));
            dispatch(loadingResults(false));
        })
        .catch(function (err) {
          console.error(err);
          dispatch(loadingResults(false));
        });
    };
  };