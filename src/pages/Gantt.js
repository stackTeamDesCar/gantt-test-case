import React, { useEffect, useMemo, useState } from "react";
import { BryntumGantt } from "@bryntum/gantt-react";
import { LocaleManager } from "@bryntum/gantt";

import Ru from "@bryntum/gantt/locales/gantt.locale.Ru";
import En from "@bryntum/gantt/locales/gantt.locale.En";

import "./index.css";

const DEFAULT_LOCALE = "en-GB";

const Gantt = () => {
  const [ganttRef, setGanttRef] = useState(null);
  const locale = localStorage.getItem("lang-test");

  const locales = {
    "ru-RU": Ru,
    "en-GB": En,
  };

  const data = useMemo(
    () => [
      {
        id: 1,
        name: "Cool project",
        startDate: "2019-01-02",
        endDate: "2021-02-02",
        children: [
          {
            id: 2,
            name: "A leaf node",
            startDate: "2019-01-02",
            endDate: "2021-02-02",
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    LocaleManager.locale = locales[locale || DEFAULT_LOCALE];
  }, [locale]);

  useEffect(() => {
    ganttRef?.ganttInstance?.taskStore?.setStoreData(data);
  }, [data, ganttRef]);

  return (
    <div className="gantt-wrapper-container">
      <BryntumGantt
        ref={setGanttRef}
        columns={[{ text: "Name", field: "name", flex: 1 }]}
      />
    </div>
  );
};

export default Gantt;