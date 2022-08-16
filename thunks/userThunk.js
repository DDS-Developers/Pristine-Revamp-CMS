// Helpers
import axiosConfig from "~/helpers/axiosConfig";

// Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("user/login", async (param, thunkAPI) => {
	try {
		const url = `${process.env.NEXT_PUBLIC_API_URL}/login`;
		const result = await axios.post(url, param);

		return result.data.result;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});
