import { createStore, combineReducers } from "redux";

const movies = (state = [], action) => {
  if (action.type === "SET_MOVIES") return action.payload;
  return state;
};

const isLoading = (state = true, action) => {
  if (action.type === "SET_ISLOADING") return action.payload;
  return state;
};

const query = (state = "", action) => {
  if (action.type === "SET_QUERY") return action.payload;
  return state;
};

const allReducers = combineReducers({
  movies,
  isLoading,
  query,
});

const store = createStore(allReducers);

export default store;
