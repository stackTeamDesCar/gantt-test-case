import React, { useEffect, useMemo, useState } from "react";

import { BryntumSchedulerPro } from "@bryntum/schedulerpro-react";
import { LocaleManager } from "@bryntum/schedulerpro";
import Ru from "@bryntum/schedulerpro/locales/schedulerpro.locale.Ru";
import En from "@bryntum/schedulerpro/locales/schedulerpro.locale.En";
import { useTranslation } from "react-i18next";

import "./index.css";
import { dates, events, resources } from "./mock";

const DEFAULT_LOCALE = "en-GB";

const schedConfig = {
  readOnly: true,
  eventTooltip: { tooltip: { disabled: true } },
  features: {
    taskEdit: false,
    regionResize: true,
    cellEdit: false,
    tree: {
      expandOnCellClick: true,
    },
  },
  subGridConfigs: {
    locked: { width: 200 },
  },
  viewPreset: "dayAndMonth",
};

export const schedulerColumnDefs = (t) => [
  {
    width: 250,
    type: "tree",
    field: "name",
    text: t("Scheduler.name"),
  },
  {
    width: 133,
    field: "description",
    text: t("Scheduler.description"),
  },
];

const Gantt = () => {
  const [, setSchedRef] = useState(null);
  const [lang, setLang] = useState(DEFAULT_LOCALE);
  const { t, i18n } = useTranslation();

  const locales = useMemo(
    () => ({
      "ru-RU": Ru,
      "en-GB": En,
    }),
    []
  );

  useEffect(() => {
    LocaleManager.locale = locales[lang];
  }, [lang, locales]);

  const setLanguage = (val) => {
    i18n.changeLanguage(val);
    setLang(val);
  };

  return (
    <div className="scheduler-wrapper-container">
      <h6 onClick={() => setLanguage("en-GB")}>EN</h6>
      <h6 onClick={() => setLanguage("ru-RU")}>RU</h6>
      <BryntumSchedulerPro
        ref={setSchedRef}
        {...schedConfig}
        columns={schedulerColumnDefs(t)}
        events={events}
        resources={resources}
        startDate={dates.startDate}
        endDate={dates.endDate}
      />
    </div>
  );
};

export default Gantt;
