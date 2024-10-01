import React, { useState, useEffect } from "react";

import { BASE_URL, TAXE_CATEGORY_LIST } from "../../../Constants/Config";
import axios from "axios";
import { useAuthDetails } from "../../../Common/cookiesHelper";
import { Grid, Grid2 } from "@mui/material";
import SelectDropDown from "../../../reuseableComponents/SelectDropDown";
import CustomHeader from "../../../reuseableComponents/CustomHeader";
import PasswordShow from "../../../Common/passwordShow";
import InputTextSearch from "../../../reuseableComponents/InputTextSearch";
import downloadIcon from "../../../Assests/Dashboard/download.svg";
import { CSVLink } from "react-csv";


const InventoryReportDropDown = ({selectedInventoryDropDown }) => {

    console.log("=-=-=-=-props",JSON.stringify(selectedInventoryDropDown))
    const { LoginGetDashBoardRecordJson, LoginAllStore, userTypeData } =
    useAuthDetails();

    const [selectedOrderSource, setSelectedOrderSource] = useState(selectedInventoryDropDown);

    const handleOptionClick = (option, dropdown) => {
        console.log("===- dropdown",dropdown)
        console.log("===-option",option)
        setSelectedOrderSource(option.title);
        // if (option && option.link) {
        //   window.location.href = option.link;  // Use this for redirection
        // }
    }

    const orderSourceList =[
        {
          id: 81,
          text: "Current Inventory Value",
          link: "/store-reporting/current-inventory-value",
        },
        {
          id: 73,
          text: "New Item Created Between",
          link: "/store-reporting/item-create-between",
        },
        {
          id: 74,
          text: "Reorder Inventory",
          link: "/store-reporting/recorder-inventory",
        },
        {
          id: 68,
          text: "Instant PO Activity Report",
          link: "/store-reporting/instant-activity",
        },
        {
          id: 65,
          text: "Check ID verification",
          link: "/store-reporting/id-verification",
        },
        {
          id: 93,
          text: "Inventory List",
          link: "/store-reporting/inventory-list",
        },
        {
          id: 94,
          text: "Profit Margin Per Item Listing",
          link: "/store-reporting/profit-margin-report",
        },
      ];
      return (
        <>
            <Grid container sx={{ padding: 2.5, mt: 3.6 }} className="box_shadow_div">
            <Grid item xs={12}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item sx={{ display: "flex", gap: 2 }}>
                <h1
                    style={{ marginBottom: 0 }}
                    className="heading content-center whitespace-nowrap"
                >
                    Inventory Report
                </h1>
                <SelectDropDown
                    sx={{ pt: 0.5, width: "19.4rem" }}
                    listItem={orderSourceList.map((item) => ({
                        title: item.text,   // Map 'text' to 'title'
                        link: item.link,    // Keep the 'link' for redirection
                    }))}
                    title="title"
                    dropdownFor="orderSourceList"
                    selectedOption={selectedOrderSource}
                    onClickHandler={handleOptionClick}
                />
                </Grid>

                <Grid
                item
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    cursor: "pointer",
                }}
                >
                
                <div className="flex justify-center items-center flex-nowrap">
                    <h1 className="text-[#0A64F9] text-[16px]">Export report</h1>
                    <img
                    style={{ height: "30px", width: "30px" }}
                    src={downloadIcon}
                    alt="downloadIcon"
                    />
                </div>
                
                </Grid>
            </Grid>
            </Grid>
            </Grid>
        </>
  );
}


export default InventoryReportDropDown;