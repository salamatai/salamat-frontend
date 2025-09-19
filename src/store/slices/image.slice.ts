import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
  selectedFile: File | null;
}

const initialState: ImageState = {
  selectedFile: null,
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setSelectedFile: (state, action: PayloadAction<File>) => {
      state.selectedFile = action.payload;
    },
    clearSelectedFile: (state) => {
      state.selectedFile = null;
    },
  },
});

export const { setSelectedFile, clearSelectedFile } = imageSlice.actions;

export default imageSlice.reducer;
