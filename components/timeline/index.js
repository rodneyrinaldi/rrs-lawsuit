import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import * as styles from "./index.module.css";

function TimeLine() {
  return (
    <div className={styles.container}>
      <p>PROCESSOS</p>
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
              "1",
              "Rodney Rinaldi 1234567-89.2021.8.26.1111",
              new Date(2020, 1, 1),
              new Date(2021, 10, 26),
            ],
            [
              "2",
              "Rodney Rinaldi 1234567-89.2021.8.26.2222",
              new Date(2019, 11, 11),
              new Date(2021, 10, 26),
            ],
            [
              "3",
              "Nilza Motta 1234567-89.2021.8.26.3333",
              new Date(2020, 2, 11),
              new Date(2021, 10, 26),
            ],
            [
              "4",
              "Andrea Terra 1234567-89.2021.8.26.4444",
              new Date(2019, 2, 11),
              new Date(2021, 10, 26),
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

export default TimeLine;
