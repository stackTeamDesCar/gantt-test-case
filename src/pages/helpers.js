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

export const onSchedulerResourceClick = async ({
  event,
  idResource,
  setIdResource,
  schedulerRef,
}) => {
  if (event.record._data.objectType === "resource") {
    if (idResource !== event.record._data.id) {
      // once load activities
      if (event.record?.children?.length > 0) return;

      setIdResource(event.record._data.id);
      schedulerRef?.schedulerProInstance?.mask("LOADING_ACTIVITIES");
      const activities = activitiesMock;

      // Getting events
      const events = schedulerRef?.schedulerProInstance?.eventStore._data || [];

      // Linking events to clicked resource
      const formattedEvents = changeEventsByResourceId({
        events,
        activities,
        mainResourceId: event.record._data.id,
      });

      // Finding and removing main resource event
      const eventRecordToRemove = events.find(
        ({ resourceId }) => resourceId === event.record._data.id
      );

      schedulerRef?.schedulerProInstance?.eventStore?.remove([
        eventRecordToRemove.id,
      ]);

      // Adding new events to others
      schedulerRef?.schedulerProInstance?.eventStore?.add(formattedEvents);
    }
    if (schedulerRef?.schedulerProInstance?.unmask) {
      schedulerRef?.schedulerProInstance?.unmask();
    }
  }
};
