import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import * as styles from "./index.module.css";

function TimeLineDet() {
  return (
    <div className={styles.container}>
      <p>PROCEDIMENTOS</p>
      <div className={styles.timeLine}>
        <Chart
          width={"100%"}
          height={"600px"}
          chartType="Timeline"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: "string", id: "Position" },
              { type: "string", id: "Name" },
              { type: "date", id: "Start" },
              { type: "date", id: "End" },
            ],
            [
              "Rodney Rinaldi",
              "Inicial",
              new Date(2021, 1, 1),
              new Date(2021, 1, 10),
            ],
            [
              "Rodney Rinaldi",
              "Contestação",
              new Date(2021, 1, 11),
              new Date(2021, 1, 26),
            ],
            [
              "Rodney Rinaldi",
              "Contrarrazões",
              new Date(2021, 1, 27),
              new Date(2021, 2, 10),
            ],
            [
              "Rodney Rinaldi",
              "Sentença",
              new Date(2021, 2, 15),
              new Date(2021, 2, 18),
            ],
            [
              "Rodney Rinaldi",
              "Apelação",
              new Date(2021, 2, 19),
              new Date(2021, 3, 3),
            ],
            [
              "Rodney Rinaldi",
              "Contrarrazões",
              new Date(2021, 3, 4),
              new Date(2021, 3, 19),
            ],
            [
              "Rodney Rinaldi",
              "Acórdão",
              new Date(2021, 3, 24),
              new Date(2021, 3, 26),
            ],
            [
              "Rodney Rinaldi",
              "Recurso Especial",
              new Date(2021, 4, 1),
              new Date(2021, 4, 16),
            ],
            [
              "Rodney Rinaldi",
              "Contrarrazões",
              new Date(2021, 4, 17),
              new Date(2021, 5, 30),
            ],
            [
              "Rodney Rinaldi",
              "Acórdão",
              new Date(2021, 6, 2),
              new Date(2021, 6, 4),
            ],
          ]}
          options={{
            timeline: {
              groupByRowLabel: false,
            },
          }}
          rootProps={{ "data-testid": "4" }}
        />
      </div>
    </div>
  );
}

export default TimeLineDet;
