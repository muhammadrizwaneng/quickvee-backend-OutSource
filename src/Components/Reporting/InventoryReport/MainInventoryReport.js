import React, { useState } from "react";
import InventoryReportFilter from "./InventoryReportFilter";

import NetSalesFilter from "./NetSalesFilter";
import InventoryTable from "./InventoryTable";
import DateRangeComponent from "../../../reuseableComponents/DateRangeComponent";
import DashDateRangeComponent from "../../../reuseableComponents/DashDateRangeComponent";
import useDebounce from "../../../hooks/useDebouncs";
import "../../../Styles/Reports.scss";
import plusIcon from "../../../Assests/Products/plusIcon.svg";

const MainItemSales = () => {
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [OrderSourceData, setOrderSourceData] = useState(null);
  const [OrderTypeData, setOrderTypeData] = useState(null);
  const [SelectCatData, setSelectCatData] = useState(null);
  const [items, setItems] = useState("");

  const [searchRecord, setSearchRecord] = useState("");
  const debouncedValue = useDebounce(searchRecord, 500);

  const handleDateRangeChange = (dateRange) => {
    setSelectedDateRange(dateRange);
  };

  const handleFilterDataChange = (OrderSource, OrderType, SelectCat,searchItems) => {
    setOrderSourceData(OrderSource);
    setOrderTypeData(OrderType);
    setSelectCatData(SelectCat);
    setItems(searchItems)
  };

  //-------------------------- New code here --- 
  
  // Initial column configuration
  const initialColumns = [
    { id: "sku", name: "SKU" },
    { id: "plus_after_sku", name: "+" },
    { id: "name", name: "Name" },
    { id: "closing_inventory", name: "Closing Inventory" },
    { id: "items_sold", name: "Items Sold" },
    { id: "days_cover", name: "Days Cover" },
    { id: "avg_cost", name: "Avg Cost" },
    { id: "plus_after_avg_cost", name: "+" },
  ];

  // Sample data for the grid
  const initialData = [
    {
      sku: "001",
      name: "Product A",
      closing_inventory: 100,
      items_sold: 20,
      days_cover: 5,
      avg_cost: 10,
      brand: "Brand A",
      supplier: "Supplier A",
      category: "Category A",
      supplier_code: "SC001",
      revenue: 200,
      avg_cost_measure: 12,
      self_through_rate: 1.5,
      created: "2023-01-01",
      first_sale: "2023-02-01",
      last_sale: "2023-03-01",
      last_received: "2023-04-01",
    },
    {
      sku: "002",
      name: "Product B",
      closing_inventory: 200,
      items_sold: 30,
      days_cover: 10,
      avg_cost: 15,
      brand: "Brand B",
      supplier: "Supplier B",
      category: "Category B",
      supplier_code: "SC002",
      revenue: 400,
      avg_cost_measure: 14,
      self_through_rate: 2.0,
      created: "2023-01-02",
      first_sale: "2023-02-02",
      last_sale: "2023-03-02",
      last_received: "2023-04-02",
    },
  ];
  const [columns, setColumns] = useState(initialColumns);
  const [selectedColumns, setSelectedColumns] = useState({
    supplierCode: false,
    brand: false,
    supplier: false,
    category: false,
    revenue: false,
    avgCostMeasure: false,
    selfThroughRate: false,
    created: false,
    firstSale: false,
    lastSale: false,
    lastReceived: false,
  });
  const [showColumnPopup, setShowColumnPopup] = useState(false);
  const [showMeasurePopup, setShowMeasurePopup] = useState(false);
  const [selectAllColumns, setSelectAllColumns] = useState(false); // State for Select All checkbox

  // Handle checkbox changes for column and measure selections
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedColumns((prev) => ({ ...prev, [name]: checked }));
  };

  // Handle Select All checkbox
  const handleSelectAllChange = (event) => {
    const { checked } = event.target;
    setSelectAllColumns(checked);
    // Update all column selections based on Select All checkbox
    const updatedColumns = {
      supplierCode: checked,
      brand: checked,
      supplier: checked,
      category: checked,
    };
    setSelectedColumns(updatedColumns);
  };

  // Apply selected columns to the grid
  const applyColumns = () => {
    let updatedColumns = [...columns];

    // Add or remove columns based on selected checkboxes
    const columnMappings = {
      supplierCode: "supplier_code",
      brand: "brand",
      supplier: "supplier",
      category: "category",
    };

    Object.entries(columnMappings).forEach(([key, value]) => {
      if (selectedColumns[key] && !updatedColumns.some((col) => col.id === value)) {
        updatedColumns.splice(1, 0, { id: value, name: value.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase()) });
      } else if (!selectedColumns[key]) {
        updatedColumns = updatedColumns.filter((col) => col.id !== value);
      }
    });

    setColumns(updatedColumns);
    setShowColumnPopup(false);
  };

  // Apply selected measures to the grid
  const applyMeasures = () => {
    let updatedColumns = [...columns];

    // Add or remove measures based on selected checkboxes
    const measureMappings = {
      revenue: "revenue",
      avgCostMeasure: "avg_cost_measure",
      selfThroughRate: "self_through_rate",
      created: "created",
      firstSale: "first_sale",
      lastSale: "last_sale",
      lastReceived: "last_received",
    };

    Object.entries(measureMappings).forEach(([key, value]) => {
      if (selectedColumns[key] && !updatedColumns.some((col) => col.id === value)) {
        updatedColumns.push({ id: value, name: value.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase()) });
      } else if (!selectedColumns[key]) {
        updatedColumns = updatedColumns.filter((col) => col.id !== value);
      }
    });

    setColumns(updatedColumns);
    setShowMeasurePopup(false);
  };

  // Set checkboxes based on current column visibility when opening popups
  const setPopupCheckboxes = (popupType) => {
    const updatedCheckboxes = {};
    if (popupType === "columns") {
      updatedCheckboxes.supplierCode = columns.some((col) => col.id === "supplier_code");
      updatedCheckboxes.brand = columns.some((col) => col.id === "brand");
      updatedCheckboxes.supplier = columns.some((col) => col.id === "supplier");
      updatedCheckboxes.category = columns.some((col) => col.id === "category");
      
      // Set Select All based on individual selections
      const allSelected = Object.values(updatedCheckboxes).every(Boolean);
      setSelectAllColumns(allSelected);
    } else if (popupType === "measures") {
      updatedCheckboxes.revenue = columns.some((col) => col.id === "revenue");
      updatedCheckboxes.avgCostMeasure = columns.some((col) => col.id === "avg_cost_measure");
      updatedCheckboxes.selfThroughRate = columns.some((col) => col.id === "self_through_rate");
      updatedCheckboxes.created = columns.some((col) => col.id === "created");
      updatedCheckboxes.firstSale = columns.some((col) => col.id === "first_sale");
      updatedCheckboxes.lastSale = columns.some((col) => col.id === "last_sale");
      updatedCheckboxes.lastReceived = columns.some((col) => col.id === "last_received");
    }
    setSelectedColumns((prev) => ({ ...prev, ...updatedCheckboxes }));
  };
  // return (
  //   <>
  //     <InventoryReportFilter onFilterDataChange={handleFilterDataChange} setSearchRecord={setSearchRecord} debouncedValue={debouncedValue} />
  //       { !debouncedValue ? ( <DashDateRangeComponent onDateRangeChange={handleDateRangeChange} />):("")}
      
  //     {/* <NetSalesFilter /> */}

  //     <InventoryTable />
  //   </>
  // );

  return (
    <div>
       <InventoryReportFilter onFilterDataChange={handleFilterDataChange} setSearchRecord={setSearchRecord} debouncedValue={debouncedValue} />
        { !debouncedValue ? ( <DashDateRangeComponent onDateRangeChange={handleDateRangeChange} />):("")}
      
      {/* <NetSalesFilter /> */}

      <InventoryTable />
      <h1>Product Inventory Grid</h1>
      <div className="custom-table">
        <table>
          <thead>
            
            <tr>
            {columns.map((col) => {
                // Check if the column id matches to render the appropriate button
                if (col.id === "plus_after_sku") {
                  return (
                    <th key={col.id} className="left-sticky">
                      <div   onClick={() => { setShowColumnPopup(true); setPopupCheckboxes("columns"); }}>
                        <img
                          
                            width={40}
                            height={40}
                            src={plusIcon}
                            alt="plusIcon"
                          />
                      
                     </div>
                      
                    </th>
                  );
                } else if (col.id === "plus_after_avg_cost") {
                  return (
                    <th key={col.id} className="right-sticky">
                     
                     <div  onClick={() => { setShowMeasurePopup(true); setPopupCheckboxes("measures"); }}>
                      <img
                         
                          width={40}
                          height={40}
                          src={plusIcon}
                          alt="plusIcon"
                        />
                     
                     </div>
                      
                    </th>
                  );
                } else {
                  return (
                    <th key={col.id}>
                      {col.name}
                    </th>
                  );
                }
              })}
            </tr>
            
          </thead>
          <tbody>
            {initialData.map((data, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col.id}>
                    {data[col.id] || ""} 
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
                <tr>
                  <td>Totals</td>
                  <td>Footer 2</td>
                  <td>Footer 3</td>
                  <td>Footer 4</td>
                  <td>Footer 5</td>
                  <td></td>
                  

                </tr>
              </tfoot>
        </table>
      </div>

      {/* Column Selection Popup */}
      {showColumnPopup && (
        <div className="popup">
          <h2>Select Columns</h2>
          <label>
            <input
              type="checkbox"
              checked={selectAllColumns}
              onChange={handleSelectAllChange}
            />
            Select All
          </label>
          <label>
            <input
              type="checkbox"
              name="supplierCode"
              checked={selectedColumns.supplierCode}
              onChange={handleCheckboxChange}
            />
            Supplier Code
          </label>
          <label>
            <input
              type="checkbox"
              name="brand"
              checked={selectedColumns.brand}
              onChange={handleCheckboxChange}
            />
            Brand
          </label>
          <label>
            <input
              type="checkbox"
              name="supplier"
              checked={selectedColumns.supplier}
              onChange={handleCheckboxChange}
            />
            Supplier
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              checked={selectedColumns.category}
              onChange={handleCheckboxChange}
            />
            Category
          </label>
          <button onClick={applyColumns}>Apply</button>
          <button onClick={() => setShowColumnPopup(false)}>Close</button>
        </div>
      )}

      {/* Measures Selection Popup */}
      {showMeasurePopup && (
        <div className="popup">
          <h2>Select Measures</h2>
          <label>
            <input
              type="checkbox"
              name="revenue"
              checked={selectedColumns.revenue}
              onChange={handleCheckboxChange}
            />
            Revenue
          </label>
          <label>
            <input
              type="checkbox"
              name="avgCostMeasure"
              checked={selectedColumns.avgCostMeasure}
              onChange={handleCheckboxChange}
            />
            Avg Cost
          </label>
          <label>
            <input
              type="checkbox"
              name="selfThroughRate"
              checked={selectedColumns.selfThroughRate}
              onChange={handleCheckboxChange}
            />
            Self Through Rate
          </label>
          <label>
            <input
              type="checkbox"
              name="created"
              checked={selectedColumns.created}
              onChange={handleCheckboxChange}
            />
            Created
          </label>
          <label>
            <input
              type="checkbox"
              name="firstSale"
              checked={selectedColumns.firstSale}
              onChange={handleCheckboxChange}
            />
            First Sale
          </label>
          <label>
            <input
              type="checkbox"
              name="lastSale"
              checked={selectedColumns.lastSale}
              onChange={handleCheckboxChange}
            />
            Last Sale
          </label>
          <label>
            <input
              type="checkbox"
              name="lastReceived"
              checked={selectedColumns.lastReceived}
              onChange={handleCheckboxChange}
            />
            Last Received
          </label>
          <button onClick={applyMeasures}>Apply</button>
          <button onClick={() => setShowMeasurePopup(false)}>Close</button>
        </div>
      )}

      {/* Buttons to open popups */}
      {/* <button onClick={() => { setShowColumnPopup(true); setPopupCheckboxes("columns"); }}>Add Columns</button>
      <button onClick={() => { setShowMeasurePopup(true); setPopupCheckboxes("measures"); }}>Add Measures</button> */}
    </div>
  );
};

export default MainItemSales;
