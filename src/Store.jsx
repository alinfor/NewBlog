import { configureStore } from "@reduxjs/toolkit";
import { reduceTodos } from "./reducer/reduceTodos";
const store = configureStore({
  reducer: {
    reduceTodos,
  },
});

export default store;