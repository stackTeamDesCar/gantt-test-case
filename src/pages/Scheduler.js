import React, { useState } from "react";

import { BryntumSchedulerPro } from "@bryntum/schedulerpro-react";
import { BryntumGantt } from "@bryntum/gantt-react";

import "./index.css";


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
