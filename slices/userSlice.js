// Thunks
import { login } from "~/thunks/userThunk";

// Dependencies
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	type: null,
	message: null,
	details: {},
	token: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: {
		[login.pending]: (state) => {
			state.loading = true;
			state.type = null;
			state.message = null;
		},
		[login.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.type = "success";
			state.message = payload.message;
		},
		[login.rejected]: (state, { payload }) => {
			state.loading = false;
			state.type = "error";
			state.message = payload;
		},
	},
});

export default userSlice.reducer;
