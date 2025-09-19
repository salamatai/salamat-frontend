import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./slices/image.slice";
import analysisReducer from "./slices/analysis.slice";

export const store = configureStore({
  reducer: {
    image: imageReducer,
    analysis: analysisReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
