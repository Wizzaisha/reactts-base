import { combineReducers } from "@reduxjs/toolkit";
import module1Slice from "../../module1/store/module1Slice";

const rootReducer = combineReducers({
  //Reducers
  module1: module1Slice,
});

export default rootReducer;
