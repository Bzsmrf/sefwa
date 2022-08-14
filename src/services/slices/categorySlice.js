import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import exerciseApi from "../../utils/exerciseApi";

const initialState = {
  category: {},
};

const fetchCategory = createAsyncThunk("category/fetchCategory", async () => {
  return await exerciseApi
    .get(`/bodyPartList`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [fetchCategory.pending]: () => {
      console.log("Pending");
    },
    [fetchCategory.fulfilled]: (state, { payload }) => {
      console.log("Successful");
      return { ...state, category: payload };
    },
    [fetchCategory.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export default categorySlice.reducer;
export { fetchCategory };
export const getCategory = (state) => state.category.category;
