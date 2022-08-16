import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../slices/searchSlice";
import categoryReducer from "../slices/categorySlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    category: categoryReducer,
  },
});
export default store;
