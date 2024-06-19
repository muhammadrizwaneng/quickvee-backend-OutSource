import React, { useState, forwardRef } from "react";
import { Box, Modal } from "@mui/material";
import Move from "../Assests/ModalImages/moved.svg"
import Slide from "@mui/material/Slide";

const SortModal = ({ headerText, otherMSG, open, onClose, onConfirm }) => {
  const myStyles = {
    width: "45vh",
    position: "absolute",
    top: "40%",
    left: "40%",
    transform: "translate(-50%, -50%)",
    fontFamily: "'CircularSTDMedium', sans-serif !important",
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        className="delete-modal-outer-div"
        closeAfterTransition
      >
        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <Box className="delete-Box-modal" style={myStyles}>
            <div className="delete-modal">
              <div className="delete-modal-content">
                <img src={Move} alt={`Delete-icon`} loading="lazy" />
                <span>
                Are you sure you want to <br />{" "}
                  {headerText ? headerText : "delete"} ? {otherMSG ? <><br/>{otherMSG}</> :""}
                </span>
              </div>
              <div className="delete-modal-button">
                <button onClick={onClose}>Cancel</button>
                <button
                  onClick={onConfirm}
                  style={{ background: " #FF4040", color: "#fff" }}
                >
                  Sort
                </button>
              </div>
            </div>
          </Box>
        </Slide>
      </Modal>
    </>
  );
};

export default SortModal;