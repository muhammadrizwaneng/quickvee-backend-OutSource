import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@mui/material";
import plusIcon from "../../../Assests/Products/plusIcon.svg";

import InventoryFilter from "./InventoryFilter";
import InventoryMeasures from "./InventoryMeasures";
import InventoryTableColumns from "./InventoryTableColumns";
import InventoryColumns from "./InventoryColumns";
const emails = ['username@gmail.com', 'user02@gmail.com'];

const InventoryTable = (props) => {
  const [leftStickyOffset, setLeftStickyOffset] = useState(0);

  // For opening and closing InventoryTableColumns modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      const tableHeaders = tableRef.current.querySelectorAll("th");
      let offset = 0;

      // Calculate cumulative width of all <th> before the left-sticky class
      for (let i = 0; i < tableHeaders.length; i++) {
        const th = tableHeaders[i];
        if (th.classList.contains("left-sticky")) {
          break;
        }
        offset += th.offsetWidth;
      }

      // Set the left offset for the sticky header
      setLeftStickyOffset(offset);
    }
  }, []);

  return (
    <>
      <Grid container className="box_shadow_div">
        <Grid item xs={12}>
          {/* Inventory Filter */}
          <InventoryFilter />
          
          {/* Table */}
          <div className="custom-table">
            <table ref={tableRef}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Supplier code</th>
                  <th>Brand</th>
                  <th>Supplier</th>
                  <th>Category</th>
                  <th
                    className="left-sticky"
                    style={{ left: `${leftStickyOffset}px`, position: "sticky" }}
                  >
                    <InventoryColumns />
                    
                  </th>
                  <th>Closing Inventory</th>
                  <th>Inventory sold<br />per day</th>
                  <th>Items sold</th>
                  <th>Days Cover</th>
                  <th>Sell-through<br />rate</th>
                  <th>Revenue</th>
                  <th>Gross Profit</th>
                  <th className="right-sticky">
                    <button onClick={handleClickOpen}>
                      <img
                        style={{ height: "40px", width: "40px" }}
                        src={plusIcon}
                        alt="plusIcon"
                      />
                    </button>
                    <InventoryTableColumns open={open} handleClose={handleClose} />
                  </th>
                </tr>
              </thead>
              
              <tbody>
               
                <tr>
                  <td>Product Name 1<span>10012</span></td>
                  <td>9023</td>
                  <td>Zara</td>
                  <td>Akash</td>
                  <td>-</td>
                  <td></td>
                  <td>4</td>
                  <td>20</td>
                  <td>5</td>
                  <td>2</td>
                  <td>-</td>
                  <td>$20.10</td>
                  <td>$200.46</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Product Name 2<span>10013</span></td>
                  <td>9024</td>
                  <td>Zara</td>
                  <td>Akash</td>
                  <td>-</td>
                  <td></td>
                  <td>4</td>
                  <td>20</td>
                  <td>5</td>
                  <td>2</td>
                  <td>-</td>
                  <td>$20.10</td>
                  <td>$200.46</td>
                  <td></td>
                </tr>
              </tbody>
              
              <tfoot>
                <tr>
                  <td>Totals</td>
                  <td>Footer 2</td>
                  <td>Footer 3</td>
                  <td>Footer 4</td>
                  <td>Footer 5</td>
                  <td></td>
                  <td>Footer 7</td>
                  <td>Footer 8</td>
                  <td>Footer 9</td>
                  <td>Footer 10</td>
                  <td>Footer 11</td>
                  <td>Footer 12</td>
                  <td>Footer 13</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default InventoryTable;
