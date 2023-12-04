import {
  createSlice,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { advertsGetAll } from "./operations";

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

interface Adverts {
  adverts: ApiResponse[];
}

const initialState: Adverts = {
  adverts: [],
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<Adverts>) => {
    builder.addCase(
      advertsGetAll.fulfilled,
      (state, action: PayloadAction<ApiResponse[]>) => {
        const newAdverts = [
          ...state.adverts,
          ...action.payload.filter(
            (newItem) =>
              !state.adverts.some(
                (existingItem) => existingItem.id === newItem.id
              )
          ),
        ];

        state.adverts = newAdverts;
      }
    );
  },
});

export const advertsReducer = advertsSlice.reducer;
