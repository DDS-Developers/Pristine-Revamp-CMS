// Constants
import initialState from "~/constants/initialState";

// Thunks
import { getList } from "~/thunks/messageThunk";

// Dependencies
import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
	name: "message",
	initialState,
	reducers: {},
	extraReducers: {
		[getList.pending]: (state) => {
			state.loading = true;
			state.type = null;
			state.message = null;
		},
		[getList.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.type = "success";
			state.message = payload.message;
		},
		[getList.rejected]: (state, { payload }) => {
			state.loading = false;
			state.type = "error";
			state.message = payload;
		},
	},
});

export default messageSlice.reducer;
