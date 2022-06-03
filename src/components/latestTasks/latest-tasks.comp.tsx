import * as React from "react";
import Grid from "../grid/grid.comp";
import { COLS_MOCK, ROW_DATA_MOCK } from "../../mock/dashboard.mock";

export default function LatestTasks() {
  const [cols, setCols] = React.useState<any>(COLS_MOCK);
  const [data, setData] = React.useState<any>(ROW_DATA_MOCK);

  return (
    <>
      <div className="mb-4" style={{ height: "250px" }}>
        <h4 className="mb-2">Latest Tasks</h4>
        <Grid cols={cols} data={data} />
      </div>
    </>
  );
}
