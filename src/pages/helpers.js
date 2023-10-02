import { activitiesMock } from "./mock";
import { uniqueId } from "lodash";

const changeEventsByResourceId = ({ activities, mainResourceId }) => {
  return activities.map(
    ({
      id,
      startDate,
      name,
      endDate,
      quantity,
      productCode,
      fatherProductCode,
      orderName,
      orderRowId,
      resourceIndex,
    }) => ({
      id: id || uniqueId(),
      resourceId: mainResourceId,
      startDate,
      endDate,
      name,
      objectType: "activity",
      quantity,
      productCode,
      fatherProductCode,
      orderName,
      orderRowId,
      resourceIndex,
    })
  );
};
