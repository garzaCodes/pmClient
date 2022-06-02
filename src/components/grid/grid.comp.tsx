import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/dist/styles/ag-theme-alpine.css"; // Optional theme CSS

export default function Grid({ cols = [], data = [] }: any) {
  const [columnDefs, setColumnDefs] = useState(cols);
  const [rowData, setRowData] = useState(data);
  // const gridRef = useRef();

  useEffect(() => {
    setColumnDefs(() => {
      return cols.map((col: any) => {
        return {
          headerName: col.title,
          field: col.field,
          sortable: true,
          filter: true,
        };
      });
    });
  }, [cols]);

  return (
    <>
      <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>
        <AgGridReact
          // Ref for accessing Grid's API
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
        />
      </div>
    </>
  );
}