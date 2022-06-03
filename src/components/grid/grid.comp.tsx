import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { GridApi } from "ag-grid-community";
import * as React from "react";

export default function Grid({ cols = [], data }: any) {
  const [rowData, setRowData] = React.useState();
  const [gridApi, setGridApi] = React.useState<GridApi | undefined>();

  const [columnDefs, setColumnDefs] = React.useState(() => {
    return cols.map((col: any, index: number) => {
      let colDef: any = {
        headerName: col.title,
        field: col.field,
        sortable: true,
        filter: true,
      };

      if (index === 0) {
        colDef.checkboxSelection = true;
      }

      return colDef;
    });
  });

  const [gridStyle, setgridStyle] = React.useState({
    height: "100%",
    width: "100%",
  });

  const onGridReady = (params: any) => {
    setGridApi(params.api);
    setRowData(data);
  };

  React.useEffect(() => {
    setRowData(() => {
      return data.map((row: any) => {
        return row;
      });
    });
  }, [data]);

  React.useEffect(() => {
    if (gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [rowData]);

  return (
    <>
      <div className="ag-theme-alpine" style={{ height: "calc(100% - 25px)" }}>
        <div style={gridStyle}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            onGridReady={onGridReady}
            animateRows={true}
            rowSelection="multiple"
          />
        </div>
      </div>
    </>
  );
}
