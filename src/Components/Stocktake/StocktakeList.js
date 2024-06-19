import { Grid, Paper } from "@mui/material";
import InputTextSearch from "../../reuseableComponents/InputTextSearch";
import AddIcon from "../../Assests/Category/addIcon.svg";
import Pagination from "../../AllUserComponents/Users/UnverifeDetails/Pagination";

//       table imports ----------------------------------------------------
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// end table imports ----------------------------------------------------
import { useEffect, useState } from "react";
import { useAuthDetails } from "../../Common/cookiesHelper";
import { useDispatch, useSelector } from "react-redux";
import { fetchStocktakeList, getStocktakeListCount } from "../../Redux/features/Stocktake/StocktakeListSlice";
import { SkeletonTable } from "../../reuseableComponents/SkeletonTable";
import useDebounce from "../../hooks/useDebouncs";


const StyledTable = styled(Table)(({ theme }) => ({
  padding: 2, // Adjust padding as needed
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#253338",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: "CircularSTDMedium",
  },
  [`&.${tableCellClasses.table}`]: {
    fontSize: 14,
    fontFamily: "CircularSTDMedium",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    // backgroundColor: "#F5F5F5",
  },
}));
const StocktakeList = ({
  setVisible,
  singleStocktakeState,
  getSingleStocktakeData,
  setSingleStocktakeState,
}) => {
   const [searchId, setSearchId] = useState(""); // State to track search ID
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const StocktakeListReducerState = useSelector((state) => state.stocktakeList);
 
  console.log("StocktakeList", StocktakeListReducerState);
  const dispatch = useDispatch();
  const { userTypeData } = useAuthDetails();
  const debouncedValue = useDebounce(searchId);
  useEffect(() => {
    const data = {
      ...userTypeData,
      perpage: rowsPerPage,
      merchant_id: "MAL0100CA",
      page: currentPage,
      search_by: Boolean(debouncedValue.trim()) ? debouncedValue : null,
    };
   
    dispatch(fetchStocktakeList(data));
  }, [currentPage, debouncedValue, rowsPerPage]);

  useEffect(() => {
    dispatch(
      getStocktakeListCount({
        ...userTypeData,
        merchant_id: "MAL0100CA",
        search_by: Boolean(debouncedValue.trim()) ? debouncedValue : null,
      })
    );
  }, [debouncedValue]);

  useEffect(() => {
    setTotalCount(StocktakeListReducerState.stocktakeListCount);
  }, [StocktakeListReducerState.stocktakeListCount]);

  const handleSearchInputChange = (value) => {
    setSearchId(value);
    setCurrentPage(1);
  };
  const tableRow = [
    "Stocktake",
    "Status",
    "Total Qty",
    "Total Discrepancy Cost",
    "Date",
  ];
  const stocktalkStatus = [
    {
      status: "0",
      title: "completed",
    },
    {
      status: "1",
      title: "draft",
    },
    {
      status: "2",
      title: "void",
    },
  ];

  const handleStocktakeIdClick = async (id) => {
    const result = await getSingleStocktakeData(id);

    if (result) {
      if (result?.status === "0") {
        setVisible("StocktakeReoport");
      }
      if (result?.status === "1") {
        setVisible("AddNewStocktake");
      }
      if (result?.status === "2") {
        setVisible("StocktakeReoport");
      }
    }
  };
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Grid container sx={{ p: 2.5 }} className="box_shadow_div">
        <Grid item xs={12}>
          <InputTextSearch
            type="text"
            placeholder="Search Purchase Order"
              value={searchId}
              handleChange={handleSearchInputChange}
            autoComplete="off"
          />
        </Grid>
      </Grid>
      <Grid container className="box_shadow_div">
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <div className="q-category-bottom-header">
                <span>Stocktake List</span>
              </div>
            </Grid>
            <Grid item>
              <div className="q-category-bottom-header">
                <p
                  onClick={() => {
                    setVisible("AddNewStocktake");
                    setSingleStocktakeState();
                  }}
                >
                  Add New Stocktake <img src={AddIcon} alt="add-icon" />{" "}
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid container sx={{ padding: 2.5 }}>
            <Grid item xs={12}>
              <Pagination
                currentPage={currentPage}
                totalItems={totalCount}
                itemsPerPage={rowsPerPage}
                onPageChange={paginate}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                setCurrentPage={setCurrentPage}
              />
            </Grid>
          </Grid>
          <Grid container>
            {StocktakeListReducerState.loading ? (
              <SkeletonTable columns={tableRow} />
            ) : (
              <>
                {StocktakeListReducerState?.StocktakeList &&
                Array.isArray(StocktakeListReducerState.StocktakeList) &&
                StocktakeListReducerState.StocktakeList.length >= 1 ? (
                  <>
                    <TableContainer component={Paper}>
                      <StyledTable aria-label="customized table">
                        <TableHead>
                          {tableRow.map((item, index) => (
                            <StyledTableCell align="center" key={item}>
                              {item}
                            </StyledTableCell>
                          ))}
                        </TableHead>
                        <TableBody>
                          {StocktakeListReducerState.StocktakeList.map(
                            (item, index) => {
                              const statusObj = stocktalkStatus.find(
                                (itemStatus) =>
                                  itemStatus.status === item.status
                              );
                              return (
                                <StyledTableRow key={index}>
                                  <StyledTableCell
                                    onClick={() => {
                                      handleStocktakeIdClick(item.id);
                                    }}
                                    align="center"
                                  >
                                    <p className="text-[#0A64F9] cursor-pointer">
                                      {item.st_id}
                                    </p>
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    <p>{statusObj ? statusObj.title : ""}</p>
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    <p>{item.total_qty}</p>
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    <p>{item.total_discrepancy_cost}</p>
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    <p>{formatDate(item.created_at)}</p>
                                  </StyledTableCell>
                                </StyledTableRow>
                              );
                            }
                          )}
                        </TableBody>
                      </StyledTable>
                    </TableContainer>
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default StocktakeList;