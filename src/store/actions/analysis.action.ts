import { createAsyncThunk } from "@reduxjs/toolkit";

interface AnalyzePayload {
  symptoms: string;
  file?: File;
}

export const analyzeImageAction = createAsyncThunk(
  "analysis/analyzeImage",
  async ({ symptoms, file }: AnalyzePayload, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("symptoms", symptoms);
      if (file) formData.append("image", file);

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Ошибка анализа");

      const result = await response.json();
      return result;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
