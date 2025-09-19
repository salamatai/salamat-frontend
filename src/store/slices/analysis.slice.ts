import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { analyzeImageAction } from "../actions/analysis.action";

interface AnalysisState {
  loading: boolean;
  result: any | null;
  error: string | null;
}

const initialState: AnalysisState = {
  loading: false,
  result: null,
  error: null,
};

export const analysisSlice = createSlice({
  name: "analysis",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(analyzeImageAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        analyzeImageAction.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.result = action.payload;
        }
      )
      .addCase(analyzeImageAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default analysisSlice.reducer;
