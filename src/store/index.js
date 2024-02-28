import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./auth";


const store = configureStore({
  reducer: { auth: authSliceReducer, },
}); //for multiple reducers

export default store;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "toggle") {
//     return { ...state, showCounter: !state.showCounter };
//   }

//   return state;
// };
