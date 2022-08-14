import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/";
import exerciseApi from "../../utils/exerciseApi";

const initialState = {
  search: {},
};

const fetchSearch = createAsyncThunk("search/fetchSearch", async () => {
  return await exerciseApi
    .get(`/bodyPartList`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
});

// console.log(process.env.REACT_APP_BASE_URL);

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: {
    [fetchSearch.pending]: () => {
      console.log("Peding");
    },
    [fetchSearch.fulfilled]: (state, { payload }) => {
      console.log("Successful");
      return { ...state, search: payload };
    },
    [fetchSearch.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export default searchSlice.reducer;
export { fetchSearch };
export const getSearch = (state) => state.search.search;
