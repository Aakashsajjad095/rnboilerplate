import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  pdfRequest: false,
  isImagePickerOpen: false,
  pdfSuccess: [],
  pdfFailure: '',
};

const ConvertPdfSlice = createSlice({
  name: 'ConvertedPdf',
  initialState,
  reducers: {
    saveConvertedPdfRequest: (state) => {
      state.pdfRequest = true;
    },
    saveConvertedPdfSuccess: (state, action) => {
      state.pdfRequest = false;
      state.pdfSuccess = state.pdfSuccess.concat([action.payload]);
    },
    saveConvertedPdfFailure: (state, action) => {
      state.pdfRequest = false;
      state.pdfFailure = action.payload;
    },
    deleteConvertedPdfSuccess: (state, action) => {
      state.pdfSuccess = state.pdfSuccess?.filter(
        (item) => item.id !== action.payload
      );
    },
    updateConvertedPdfSuccess: (state, action) => {
      state.pdfSuccess =  action.payload},
    imagePickerSuccess: (state, action) => {
      state.isImagePickerOpen = action.payload;
    },
  },
});

export const {
  saveConvertedPdfRequest,
  saveConvertedPdfSuccess,
  saveConvertedPdfFailure,
  deleteConvertedPdfSuccess,
  updateConvertedPdfSuccess,
  imagePickerSuccess,
} = ConvertPdfSlice.actions;

export default ConvertPdfSlice.reducer;
