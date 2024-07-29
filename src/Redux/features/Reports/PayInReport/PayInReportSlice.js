import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, PAY_IN_REPORT } from "../../../../Constants/Config";

const initialState = {
  loading: false,
  PayinReportData: [],
  successMessage: "",
  error: "",
};

// Generate pening , fulfilled and rejected action type
export const fetchPayinReportData = createAsyncThunk(
  "PayinReportList/fetchPayinReportData.",
  async (data, { rejectWithValue }) => {
    try {
      const { token, ...dataNew } = data;
      const response = await axios.post(
        BASE_URL + PAY_IN_REPORT,
        dataNew,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response)
      if (response.data.status === true) {
        // console.log(response.data
        //     )
        return response.data.emp_data;
      }
    } catch (error) {
      // throw new Error(error.response.data.message);
      const customError = {
        message: error.message,
        status: error.response ? error.response.status : "Network Error",
        data: error.response ? error.response.data : null,
      };
      return rejectWithValue(customError);
    }
  }
);

const PayinReportSlice = createSlice({
  name: "PayinReportList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPayinReportData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPayinReportData.fulfilled, (state, action) => {
      state.loading = false;
      state.PayinReportData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPayinReportData.rejected, (state, action) => {
      state.loading = false;
      state.PayinReportData = {};
      state.error = action.error.message;
    });
  },
});

export default PayinReportSlice.reducer;
