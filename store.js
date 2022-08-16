import userReducer from "~/slices/userSlice";

// Dependencies
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		user: userReducer,
	},
});

export default store;
