import React, { useRef } from "react";

//import from gantt-react as workaround to use both gantt and scheduler
import { BryntumSchedulerPro } from "@bryntum/gantt-react";

import { events, resources } from "./mock";
import "./index.scss";

const columns = [
  {
    width: 250,
    type: "tree",
    field: "name",
  },
  {
    width: 133,
    field: "description",
  },
  {
    width: 133,
    field: "utilizationPercentage",
  },
  {
    width: 133,
    field: "worked",
  },
  {
    width: 133,
    field: "availability",
    sorted: true,
  },
  {
    width: 133,
    field: "startDate",
  },
  {
    width: 133,
    field: "endDate",
  },
];

const conf = {
  readOnly: true,
  eventTooltip: { tooltip: { disabled: true } },
  scheduleMenuFeature: false,
  scheduleContextFeature: false,
  taskEditFeature: false,
  regionResizeFeature: true,
  cellEditFeature: false,
  treeFeature: true,
  timeAxisHeaderMenuFeature: false,
  viewPreset: "dayAndMonth",
  resourceTimeRangesFeature: true,
  subGridConfigs: {
    locked: { width: 200 },
  },
};

const Scheduler = () => {
  const schedulerRef = useRef();

  return (
    <div className="scheduler-wrapper-container">
      <BryntumSchedulerPro
        {...conf}
        ref={schedulerRef}
        columns={columns}
        resources={resources}
        events={events}
        endDate="2023-08-14T10:30:00Z"
        startDate="2023-07-07T14:00:00Z"
      />
    </div>
  );
};

export default Scheduler;