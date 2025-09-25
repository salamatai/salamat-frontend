import { createAsyncThunk } from "@reduxjs/toolkit";

interface AnalyzePayload {
  symptoms: string;
  file?: File;
}

export const analyzeImageAction = createAsyncThunk(
  "analysis/analyzeImage",
  async ({ symptoms }: AnalyzePayload, thunkAPI) => {
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms }),
      });

      const result = await res.json();

      if (!res.ok) {
        console.error(result);
        return thunkAPI.rejectWithValue(result);
      }

      console.log(result);
      return result;
    } catch (err: any) {
      console.error(err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
