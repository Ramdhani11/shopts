"use client";

import { dummyData } from "@/constant";
import { DataDummy } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { log } from "console";
import { access } from "fs";

interface StateData {
  data: DataDummy[];
}

const initialState: StateData = {
  data: [],
};

export const barangSlice = createSlice({
  name: "barang",
  initialState,
  reducers: {
    getDatas: (state) => {
      state.data = dummyData;
    },
    hapusBarang: (state, action) => {
      state.data = state.data.filter((data) => data.id !== action.payload);
    },
    tambahBarang: (state, action) => {
      state.data = [action.payload, ...state.data];
    },
  },
});

export const { getDatas, hapusBarang, tambahBarang } = barangSlice.actions;

export default barangSlice.reducer;
