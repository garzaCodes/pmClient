import * as React from "react";
import Grid from "../grid/grid.comp";
import { COLS_MOCK2, ROW_DATA_MOCK2 } from "../../mock/dashboard.mock";

export default function UpcomingEvents() {
  const [cols, setCols] = React.useState<any>(COLS_MOCK2);
  const [data, setData] = React.useState<any>(ROW_DATA_MOCK2);

  return (
    <>
      <div style={{ height: "250px" }}>
        <h4 className="mb-2">Upcoming Tasks</h4>
        <Grid cols={cols} data={data} />
      </div>
    </>
  );
}
