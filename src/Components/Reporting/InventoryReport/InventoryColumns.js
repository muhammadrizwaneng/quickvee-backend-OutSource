import React, { useEffect, useState, useRef } from "react";

import Popover from '@mui/material/Popover';
import { Checkbox, Grid } from "@mui/material";
import plusIcon from "../../../Assests/Products/plusIcon.svg";
import Grow from '@mui/material/Grow';
import CheckBoxField from "../../../reuseableComponents/CheckBoxField";


const InventoryColumns = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;





    return (
        <>
            
                <div aria-describedby={id} onClick={handleClick}>
                    <img
                        style={{ height: "40px", width: "40px" }}
                        src={plusIcon}
                        alt="plusIcon"
                    />
                </div>
            

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                TransitionComponent={Grow}
                sx={{
                    '& .MuiPaper-root': {
                        borderRadius: '8px', // Adjust border radius
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Custom shadow
                        width: '320px'
                    },
                }}
            >

                <div style={{ padding: 8, borderRadius: 8, fontSize: 14 }}>
                    <p className="mb-3" style={{ backgroundColor: '#F8F8F8', }}>              <Checkbox
                        sx={{
                            "& .MuiSvgIcon-root": {
                                borderRadius: '50%',
                                color: '#707070'
                            }
                        }}
                    /> All</p>

                    <Grid container className="mb-3">
                        {["Supplier code", "Brand", "Supplier", "Category", "Tag"].map(
                            (option) => (

                                <Grid item xs={6} sm={12} md={6}>
                                    <Checkbox
                                        sx={{
                                            "& .MuiSvgIcon-root": {
                                                borderRadius: '50%',
                                                color: '#707070'
                                            }
                                        }}
                                    />
                                    {option}
                                </Grid>
                            )
                        )}
                    </Grid>
                    <div style={{ width: '100%', marginTop: 10, paddingLeft: 12, paddingBottom: 8 }}>
                        <button className="btn_blue" style={{ fontSize: 14 }}>
                            Apply
                        </button>
                    </div>
                </div>
            </Popover>
        </>
    );
};

export default InventoryColumns;
