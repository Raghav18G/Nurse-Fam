import { Button, Avatar } from "@mui/material";
import Actions from "./Actions";
import { getBlockState } from "./utils";
import { getFormattedDate, getCommonColDef } from "../../shared/utils";
import "./style.css";

export const getColumns = (navigate, viewType) => {
  const cols = [
    {
      field: "name",
      headerName: "Name",
      valueGetter: (params) => (params.row.name ? params.row.name : "N.A"),
      ...getCommonColDef(),
      // width: 500,
      sortable: false,
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      valueGetter: (params) => (params.row.phone ? params.row.phone : "N.A"),
      ...getCommonColDef(),
      // width: 500,
      sortable: false,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      valueGetter: (params) => (params.row.email ? params.row.email : "N.A"),
      ...getCommonColDef(),
      // width: 500,
      sortable: false,
      flex: 1,
    },
  ];
  return cols;
};
