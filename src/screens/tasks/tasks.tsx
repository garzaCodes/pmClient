import { COLS_MOCK3, ROW_DATA_MOCK3 } from "../../mock/dashboard.mock";
import Grid from "../../components/grid/grid.comp";
import { Col, Row } from "react-bootstrap";
import * as React from "react";

export default function Tasks() {
  const [cols, setCols] = React.useState<any>(COLS_MOCK3);
  const [data, setData] = React.useState<any>(ROW_DATA_MOCK3);

  return (
    <>
      <Row>
        <Col className="px-4">
          <div style={{ height: 400 }}>
            <h4 className="mb-2">Tasks</h4>
            <Grid cols={cols} data={data} />
          </div>
        </Col>
      </Row>
    </>
  );
}
