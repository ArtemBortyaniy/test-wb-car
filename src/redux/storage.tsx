import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/slice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
