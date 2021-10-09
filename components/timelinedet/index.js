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
          height={"100%"}
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
              "Autos",
              "1234567-89.2021.8.26.1111",
              new Date(2021, 1, 1),
              new Date(2021, 6, 5),
            ],
            ["Inicial", "5d", new Date(2021, 1, 1), new Date(2021, 1, 6)],
            [
              "Contestação",
              "15d",
              new Date(2021, 1, 11),
              new Date(2021, 1, 26),
            ],
            [
              "Contrarrazões",
              "15d",
              new Date(2021, 1, 27),
              new Date(2021, 2, 10),
            ],
            ["Sentença", "3d", new Date(2021, 2, 15), new Date(2021, 2, 18)],
            ["Apelação", "15d", new Date(2021, 2, 19), new Date(2021, 3, 3)],
            [
              "Contrarrazões",
              "15d",
              new Date(2021, 3, 4),
              new Date(2021, 3, 19),
            ],
            ["Acórdão", "3d", new Date(2021, 3, 24), new Date(2021, 3, 26)],
            [
              "Embargos Declaração",
              "5d",
              new Date(2021, 3, 24),
              new Date(2021, 3, 29),
            ],
            [
              "Recurso Especial",
              "15d",
              new Date(2021, 4, 1),
              new Date(2021, 4, 16),
            ],
            [
              "Contrarrazões",
              "15d",
              new Date(2021, 4, 17),
              new Date(2021, 5, 30),
            ],
            ["Acórdão", "3d", new Date(2021, 6, 2), new Date(2021, 6, 4)],
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
