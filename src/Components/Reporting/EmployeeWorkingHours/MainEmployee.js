import React, { useState, useEffect } from "react";
import DownIcon from "../../../Assests/Dashboard/Down.svg";
import { BASE_URL, EMPLOYEE_LIST } from "../../../Constants/Config";
import axios from "axios";
import { Grid } from "@mui/material";
import SelectDropDown from "../../../reuseableComponents/SelectDropDown";

const MainEmployee = ({ onFilterDataChange }) => {
  const [selectedEmployee, setSelectedEmployee] = useState("All");


  const [selectedEmployeeID, setSelectedEmployeeID] = useState("All");
  const [filteredEmpData, setFilteredEmpData] = useState({
    category_id: "all",
  });
  const [employeeList, setemployeeList] = useState([]);
  const [loadingEmpList, setLoadingEmpList] = useState(true);



  const handleOptionClick = (option, dropdown) => {
    switch (dropdown) {
      case "employee":
        if (option === "All") {
          setSelectedEmployee("All");
          setSelectedEmployeeID("All");
  
          setFilteredEmpData({
            ...filteredEmpData,
            emp_id: "all",
            merchant_id: "",
            order_env: "",
            limit: "",
          });
        } else {
          const emp_id = option.id;
          setSelectedEmployee(option.title);
          setSelectedEmployeeID(option.id);
     
          setFilteredEmpData({
            ...filteredEmpData,
            emp_id,
            merchant_id: "",
            order_env: "",
            limit: "",
          });
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          BASE_URL + EMPLOYEE_LIST,
          {
            merchant_id: "MAL0100CA",
          },
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        // Assuming the API response has a data property containing the category list
        const EmpList = response.data.result;
        // Extracting category IDs and view titles
        const mappedOptions = EmpList.map((empdata) => ({
          id: empdata.id,
          title: empdata.f_name + " " + empdata.l_name,
        }));

        setemployeeList(mappedOptions);
        setLoadingEmpList(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingEmpList(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    onFilterDataChange(selectedEmployeeID);
  }, [selectedEmployeeID]);

  return (
    <>
      <Grid container className="box_shadow_div">
        <Grid item xs={12}>
          <Grid container sx={{ padding: 2.5 }}>
            <Grid item xs={12}>
              <div className="q_details_header">
                {" "}
                Employee Working Hours (Clock In/Out)
              </div>
            </Grid>
          </Grid>
          <Grid container sx={{ px: 2.5 }}>
            <Grid item xs={12}>
              <div className="q_details_header ">Filter by</div>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ px: 2.5, pb: 2.5 }}>
            <Grid item xs={12} sm={6} md={4}>
            <label className="q-details-page-label" htmlFor="employeeFilter">
                Employee
              </label>
              <SelectDropDown 
              heading={"All"}
                listItem={employeeList}
                title={"title"}
                selectedOption={selectedEmployee}
                dropdownFor={"employee"}
                onClickHandler={handleOptionClick}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    
    </>
  );
};

export default MainEmployee;
