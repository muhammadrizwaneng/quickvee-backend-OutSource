import React, { useState } from "react";
import InventoryStocktateHistoryReportList from "./InventoryStocktateHistoryReportList";
import DashDateRangeComponent from "../../../reuseableComponents/DashDateRangeComponent";
import { Grid } from "@mui/material";

const NewItemCreatedBetweenMain = () => {
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const handleDateRangeChange = (dateRange) => {
    setSelectedDateRange(dateRange);
  };

  return (
    <>
      <Grid
        container
        sx={{ padding: 2.5, mt: 3.6 }}
        className="box_shadow_div "
      >
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <h1 style={{ marginBottom: 0 }} className="heading ">
                Stocktake History Report
              </h1>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{}}>
        <DashDateRangeComponent onDateRangeChange={handleDateRangeChange} />
      </Grid>

      <InventoryStocktateHistoryReportList selectedDateRange={selectedDateRange} />
    </>
  );
};

export default NewItemCreatedBetweenMain;
