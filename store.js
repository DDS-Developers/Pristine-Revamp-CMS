// Reducers
import userReducer from "~/slices/userSlice";
import purchaseReducer from "~/slices/purchaseSlice";
import messageReducer from "~/slices/messageSlice";

// Dependencies
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		user: userReducer,
		purchase: purchaseReducer,
		message: messageReducer,
	},
});

export default store;
