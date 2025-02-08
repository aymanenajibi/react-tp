import { createSlice } from "@reduxjs/toolkit";

const cafeSlice = createSlice({
  name: "cafe",
  initialState: {
    iceCafe: [],
    hotCafe: [],
    loading: false,
    error: null,
  },
  reducers: {
    setIceCafe: (state, action) => {
      state.iceCafe = action.payload;
    },
    setHotCafe: (state, action) => {
      state.hotCafe = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    clearLoading: (state) => {
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setIceCafe, setHotCafe, setLoading, setError, clearLoading } =
  cafeSlice.actions;
export default cafeSlice.reducer;
