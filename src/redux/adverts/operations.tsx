import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://656c46e2e1e03bfd572e220e.mockapi.io/api/adverts/";

interface ApiResponse {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
}

interface Pagination {
  page: number;
  limit: number;
}

export const advertsGetAll = createAsyncThunk<ApiResponse[], Pagination>(
  "adverts/getAll",
  async ({ page, limit }, thunkAPI) => {
    try {
      const res = await axios.get(`adverts?page=${page}&limit=${limit}`);
      return res.data as ApiResponse[];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
