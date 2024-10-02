import React, { useState } from "react";
// import NewItemCreatedBetweenList from "./NewItemCreatedBetweenList";
import InventoryPerformanceList from './InventoryPerformanceList'
import DashDateRangeComponent from "../../../reuseableComponents/DashDateRangeComponent";
import { Grid } from "@mui/material";

const InventroyPerformanceMain = () => {
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
                Performance
              </h1>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{}}>
        <DashDateRangeComponent onDateRangeChange={handleDateRangeChange} />
      </Grid>

      <InventoryPerformanceList selectedDateRange={selectedDateRange} />
    </>
  );
};

export default InventroyPerformanceMain;
