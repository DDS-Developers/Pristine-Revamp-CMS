// Reducers
import userReducer from "~/slices/userSlice";
import purchaseReducer from "~/slices/purchaseSlice";
import messageReducer from "~/slices/messageSlice";
import promotionReducer from "~/slices/promotionSlice";
import articleReducer from "~/slices/articleSlice";

// Dependencies
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		user: userReducer,
		purchase: purchaseReducer,
		message: messageReducer,
		promotion: promotionReducer,
		article: articleReducer,
	},
});

export default store;
