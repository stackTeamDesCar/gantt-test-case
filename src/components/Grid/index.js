import { useState } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { useThemeVariable } from "../Theme";
import classNames from "classnames";
import "./index.scss";

import {
  GridCore,
  ClientSideRowModelModule,
} from "@ag-grid-community/all-modules";
import "@ag-grid-community/core/dist/styles/ag-grid.min.css";

const modules = [GridCore, ClientSideRowModelModule];

const Grid = (props) => {
  const agTheme = useThemeVariable("agTheme");

  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ]);

  const [columnDefs] = useState([
    {
      headerName: "Make",
      field: "make",
      colId: "make",
      flex: 1,
      resizable: true,
    },
    {
      headerName: "Model",
      field: "model",
      colId: "model",
      flex: 1,
      resizable: true,
    },
    {
      headerName: "Price",
      field: "price",
      colId: "price",
      flex: 1,
      resizable: true,
    },
  ]);

  return (
    <div
      className={classNames("ublique-datatable", agTheme, {
        "max-height-with-scroll": 800,
      })}
    >
      <div className="ag-grid-table" style={{ minHeight: "200px" }}>
        <AgGridReact
          {...props}
          rowData={rowData}
          columnDefs={columnDefs}
          modules={modules}
        ></AgGridReact>
      </div>
    </div>
  );
};

Grid.defaultProps = {
  domLayout: "autoHeight",
  sortable: false,
  filter: false,
  floatingFilter: false,
  canAddRows: false,
  canDeleteRows: false,
  detailCellRendererParams: {},
  canAddDuplicate: false,
  canDuplicate: false,
  canClearAll: false,
  canShowCheckbox: false,
  canPinRowTop: false,
  canPinRowBottom: false,
  isSizeToFit: false,
  isAutoSize: false,
  isAutoSizeAll: false,
  autoGroupColumnDef: {},
  resizable: false,
  animateRows: false,
  pagination: false,
  masterDetail: false,
  hide: false,
  flex: null,
  rowHeight: 50,
  treeData: false,
  width: 150,
  minWidth: 100,
  tooltipShowDelay: 0,
  enableRangeSelection: false,
  sortingOrder: ["desc", "asc", null],
  rowMultiSelectWithClick: false,
  editable: false,
  fullRowEdit: false,
  autoSizeColumns: false,
  canSearch: true,
  onRowSelected: () => {},
  maxHeightWithScroll: false,
};

export default Grid;
