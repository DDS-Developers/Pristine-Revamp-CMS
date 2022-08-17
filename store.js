// Reducers
import userReducer from "~/slices/userSlice";
import purchaseReducer from "~/slices/purchaseSlice";

// Dependencies
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		user: userReducer,
		purchase: purchaseReducer,
	},
});

export default store;
