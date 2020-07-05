import React, { useState, createContext, useReducer } from "react";

export const StateContext = createContext();

const initialState = { isLoading: true, query: "", movies: [], movieId: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ISLOADING":
      return { ...state, isLoading: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
    case "SET_MOVIEID":
      return { ...state, movieId: action.payload };
  }
};

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};
