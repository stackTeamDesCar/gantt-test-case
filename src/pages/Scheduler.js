import React, { useState } from "react";

import { BryntumSchedulerPro } from "@bryntum/schedulerpro-react";
import { BryntumGantt } from "@bryntum/gantt-react";

import "./index.css";


const schedConfig = {
  // readOnly: true,
  // eventTooltip: { tooltip: { disabled: true } },
  // features: {
  // taskEdit: false,
  // regionResize: true,
  // cellEdit: false,
  // tree: {
  //   expandOnCellClick: true,
  // },
  // },
  // subGridConfigs: {
  //   locked: { width: 200 },
  // },
  // viewPreset: "dayAndMonth",
};

const Gantt = () => {
  const [chart, setChart] = useState();

  return (
    <div className="scheduler-wrapper-container">
      <h6 onClick={() => setChart(!chart)}>switch</h6>
      {!chart ? <BryntumSchedulerPro /> : <BryntumGantt />}
    </div>
  );
};

export default Gantt;
