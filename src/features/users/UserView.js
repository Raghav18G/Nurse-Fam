import React, { useEffect, useState } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  Button,
  Container,
  TextField,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchUserData,
  pageChanged,
  pageLeft,
  pageLimit,
  searchKeyChanged,
  sortingChanged,
} from "./user.slice";
import { getColumns } from "./columns-def";
import "./style.css";

const UserView = () => {
  const {
    data,
    loading,
    total,
    currentPage,
    sortingInfo,
    searchKey,
    currentPageLimit,
    remarkStatus,
  } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [params] = useSearchParams();

  const viewType = params.get("view-type");

  useEffect(() => {
    return () => dispatch(pageLeft());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [
    dispatch,
    currentPage,
    viewType,
    sortingInfo,
    searchKey,
    currentPageLimit,
    remarkStatus,
  ]);

  const [open, setOpen] = useState(false);

  return (
    <Container className="userview-container">
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "2rem" }}>Users</Typography>
      </Grid>
      {/* <Grid
        container
        className="userview-navbar"
        sx={{ display: "flex", justifyContent: "end !important" }}
      > */}
      <Grid sx={{ display: "flex", margin: "1rem 0" }}>
        <TextField
          label={`Search by Name`}
          value={searchKey}
          onChange={(e) => dispatch(searchKeyChanged(e.target.value))}
          fullWidth
          size="small"
        />
      </Grid>

      {/* </Grid> */}
      <DataGrid
        rows={data}
        columns={getColumns(navigate, viewType)}
        getRowId={(row) => row._id}
        disableColumnFilter
        disableColumnMenu
        loading={loading === "pending"}
        paginationMode="server"
        pageSize={currentPageLimit}
        page={currentPage}
        rowCount={total}
        rowsPerPageOptions={[25, 50, 100]}
        onPageSizeChange={(newPageSize) => dispatch(pageLimit(newPageSize))}
        onPageChange={(newPage) => dispatch(pageChanged(newPage))}
        disableSelectionOnClick
      />
    </Container>
  );
};

export default UserView;
