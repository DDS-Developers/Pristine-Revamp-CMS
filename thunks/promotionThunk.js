// Helpers
import axiosConfig from "~/helpers/axiosConfig";

// Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getList = createAsyncThunk(
	"promotion/getList",
	async (param, thunkAPI) => {
		try {
			const state = thunkAPI.getState();
			const url = `${process.env.NEXT_PUBLIC_API_URL}/promotion?${param}`;
			const result = await axios.get(url, axiosConfig(state.user.token));

			return result.data.result;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);
