import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "../action/taskSlice";

const store = configureStore({
  reducer: { tasks: taskSlice.reducer },
});

export default store;
