import React, { useEffect, useState } from "react";
import AddIcon from "../../Assests/Category/addIcon.svg";
import { fetchpurchaseData } from "../../Redux/features/PurchaseOrder/purchaseOrderSlice";
import { useSelector, useDispatch } from "react-redux";

import ResciveIcon from "../../Assests/Dashboard/rescived.svg";
import VoicIcon from "../../Assests/Dashboard/void.svg";
import ActiveIcon from "../../Assests/Dashboard/active.svg";

import { Link } from "react-router-dom";

const PurchaseTable = ({ seVisible, searchId }) => {
  // for list Purchase Order
  const [allpurchase, setallpurchase] = useState([]);

  const AllpurchaseDataState = useSelector((state) => state.purchase);
  const dispatch = useDispatch();
  useEffect(() => {
    let data = {
      merchant_id: "MAL0100CA",
    };
    if (data) {
      dispatch(fetchpurchaseData(data));
    }
  }, []);

  useEffect(() => {
    if (!AllpurchaseDataState.loading && AllpurchaseDataState.purchaseData) {
      setallpurchase(AllpurchaseDataState.purchaseData);
    }
  }, [
    AllpurchaseDataState,
    AllpurchaseDataState.loading,
    AllpurchaseDataState.purchaseData,
  ]);

  const filteredPurchase = allpurchase.filter((purchaseData) =>
    purchaseData.po_number.includes(searchId)
  );

  return (
    <>
      <div className="box_shadow_div">
        <div className="q-category-bottom-header-sticky">
          <div className="q-category-bottom-header">
            <span>Purchase Order</span>
            <Link to="/add-po">
              <p>
                Add New PO <img src={AddIcon} alt="add-icon" />{" "}
              </p>
            </Link>
          </div>
          <div className="q-category-bottom-categories-header">
            <p className="purchase-data-sort ">Order#</p>
            <p className="purchase-data-sort ">Status</p>
            <p className="purchase-data-sort ">Received</p>

            <p className="purchase-data-sort ">Total Qty</p>
            <p className="purchase-data-title">Vender Name</p>
            <p className="purchase-data-items">Total Cost</p>
            <p className="purchase-data-items">Due</p>
            <p className="purchase-data-items">Last Update</p>
            <p className="purchase-data-items">Received At</p>
          </div>
        </div>

        {filteredPurchase &&
          filteredPurchase.length >= 1 &&
          filteredPurchase.map((purchaseData, index) => (
            <div
              className={` q-category-bottom-categories-listing purchase-item ${
                index % 2 === 0 ? "even" : "odd"
              }`}
              key={purchaseData.order}
            >
              <div className="q-category-bottom-categories-single-category">
                <p className="purchase-data-sort purchaseData">
                  <Link to=""> {purchaseData.po_number}</Link>
                </p>
                {purchaseData.is_void === "1" ? (
                  <p className="purchase-data-sort  text-[#F90A0A]">Void</p>
                ) : purchaseData.is_draft === "1" ? (
                  <p className="purchase-data-sort  text-[#646464]">Draft</p>
                ) : purchaseData.received_status === "0" ? (
                  <p className="purchase-data-sort  text-[#0A64F9]">Active</p>
                ) : purchaseData.received_status === "1" ? (
                  <p className="purchase-data-sort  text-[#FF8800]">Partial</p>
                ) : purchaseData.received_status === "2" ? (
                  <p className="purchase-data-sort  text-[#17B11D]">Received</p>
                ) : (
                  <p className="purchase-data-sort   text-[#0A64F9]">Active</p>
                )}

                {purchaseData.is_void === "1" ? (
                  <p className="purchase-data-sort "></p>
                ) : purchaseData.is_draft === "1" ? (
                  <p className="purchase-data-sort "></p>
                ) : purchaseData.received_status === "0" ? (
                  <p className="purchase-data-sort ">
                    <img src={ActiveIcon} alt="Active" />
                  </p>
                ) : purchaseData.received_status === "1" ? (
                  <p className="purchase-data-sort ">
                    <img src={VoicIcon} alt="Partial" />
                  </p>
                ) : purchaseData.received_status === "2" ? (
                  <p className="purchase-data-sort ">
                    <img src={ResciveIcon} alt="ResciveIcon" />
                  </p>
                ) : (
                  <p className="purchase-data-sort ">
                    <img src={ActiveIcon} alt="ActiveIcon" />
                  </p>
                )}

                <p className="purchase-data-sort purchaseData">
                  {purchaseData.total_qty}
                </p>
                <p className="purchase-data-title  purchaseData">
                  {purchaseData.vendor_name}
                </p>
                <p className="purchase-data-title purchaseData ">
                  {purchaseData.total_cost !== null
                    ? `$${Number(purchaseData.total_cost).toLocaleString(
                        "en-US",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}`
                    : "$0.00"}
                </p>

                <p className="purchase-data-title purchaseData">
                  {purchaseData.stock_date === "0000-00-00"
                    ? "-"
                    : new Date(purchaseData.stock_date).toLocaleDateString(
                        "en-US"
                      )}{" "}
                </p>

                <p className="purchase-data-title purchaseData">
                  {purchaseData.updated_at === "0000-00-00 00:00:00"
                    ? new Date(purchaseData.created_at).toLocaleDateString(
                        "en-US"
                      )
                    : new Date(purchaseData.updated_at).toLocaleDateString(
                        "en-US"
                      )}
                </p>

                <p className="purchase-data-title purchaseData">
                  {purchaseData.received_status === "2"
                    ? purchaseData.received_at !== "0000-00-00 00:00:00"
                      ? new Date(purchaseData.received_at).toLocaleDateString(
                          "en-US"
                        )
                      : "11/30/-0001"
                    : "-"}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default PurchaseTable;
