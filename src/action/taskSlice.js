import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Dummy",
    description: "Dummy Decsc",
    ETA: new Date().toString(),
    status: "Todo",
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state = [...state, action.payload];
      return state
    },
  },
});

export const { addTask } = taskSlice.actions;
