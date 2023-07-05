export const events = [
  {
    id: "67",
    name: "GUANZATE",
    availability: 3840,
    objectType: "resourceType",
    startDate: "2023-07-07T16:00:00.000Z",
    endDate: "2023-08-08T07:30:00.000Z",
    resourceId: "38",
    productCode: "",
    orderRowId: "",
    eventColor: "blue",
  },
  {
    id: "68",
    name: "MACHINE",
    availability: 2880,
    objectType: "classType",
    startDate: "2023-07-10T04:30:00.000Z",
    endDate: "2023-08-08T07:30:00.000Z",
    resourceId: "39",
    productCode: "",
    orderRowId: "",
    eventColor: "blue",
  },
  {
    id: "69",
    name: "SPECOLA",
    availability: 2880,
    objectType: "class",
    startDate: "2023-07-10T04:30:00.000Z",
    endDate: "2023-08-08T07:30:00.000Z",
    resourceId: "40",
    productCode: "",
    orderRowId: "",
    eventColor: "blue",
  },
  {
    id: "70",
    name: "SPECOLA GUANZATE",
    availability: 2880,
    objectType: "resource",
    startDate: "2023-07-10T04:30:00.000Z",
    endDate: "2023-08-08T07:30:00.000Z",
    resourceId: "7525d280-e90a-432e-8b4d-1f91ae924ac4",
    productCode: "",
    orderRowId: "",
    eventColor: "green",
  },
  {
    id: "71",
    name: "WORKER",
    availability: 960,
    objectType: "classType",
    startDate: "2023-07-07T16:00:00.000Z",
    endDate: "2023-08-07T10:30:00.000Z",
    resourceId: "41",
    productCode: "",
    orderRowId: "",
    eventColor: "blue",
  },
  {
    id: "72",
    name: "MAGAZZINIERE",
    availability: 960,
    objectType: "class",
    startDate: "2023-07-07T16:00:00.000Z",
    endDate: "2023-08-07T10:30:00.000Z",
    resourceId: "42",
    productCode: "",
    orderRowId: "",
    eventColor: "blue",
  },
  {
    id: "73",
    name: "MAGAZZINIERE_FINITO",
    availability: 960,
    objectType: "resource",
    startDate: "2023-07-07T16:00:00.000Z",
    endDate: "2023-08-07T10:30:00.000Z",
    resourceId: "9b00073e-663f-4709-ba24-f5e05741c897",
    productCode: "",
    orderRowId: "",
    eventColor: "green",
  },
  {
    id: "74",
    name: "TRADATE",
    availability: 960,
    objectType: "resourceType",
    startDate: "2023-07-10T14:30:00.000Z",
    endDate: "2023-08-14T12:30:00.000Z",
    resourceId: "43",
    productCode: "",
    orderRowId: "",
    eventColor: "blue",
  },
  {
    id: "75",
    name: "WORKER",
    availability: 960,
    objectType: "classType",
    startDate: "2023-07-10T14:30:00.000Z",
    endDate: "2023-08-14T12:30:00.000Z",
    resourceId: "44",
    productCode: "",
    orderRowId: "",
    eventColor: "blue",
  },
  {
    id: "76",
    name: "MAGAZZINIERE",
    availability: 960,
    objectType: "class",
    startDate: "2023-07-10T14:30:00.000Z",
    endDate: "2023-08-14T12:30:00.000Z",
    resourceId: "45",
    productCode: "",
    orderRowId: "",
    eventColor: "blue",
  },
  {
    id: "77",
    name: "MAGAZZINIERE_FINITO_TRADATE",
    availability: 960,
    objectType: "resource",
    startDate: "2023-07-10T14:30:00.000Z",
    endDate: "2023-08-14T12:30:00.000Z",
    resourceId: "818465a3-ae5d-4e32-b95e-ad8304fb73aa",
    productCode: "",
    orderRowId: "",
    eventColor: "green",
  },
];

export const resources = [
  {
    name: "GUANZATE",
    description:
      "Polo specolatura, controllo qualità e magazzino pezze e rotoli",
    startDate: "2023-07-07 18:00:00",
    endDate: "2023-08-08 09:30:00",
    availability: 3840,
    worked: 1824,
    utilization: 0.475,
    id: "38",
    utilizationPercentage: "47.50",
    orderRowId: "",
    productCode: "",
    objectType: "resourceType",
    hierarchy: "GUANZATE",
    children: [
      {
        name: "MACHINE",
        description: null,
        startDate: "2023-07-10 06:30:00",
        endDate: "2023-08-08 09:30:00",
        availability: 2880,
        worked: 1524,
        utilization: 0.529,
        id: "39",
        utilizationPercentage: "52.90",
        orderRowId: "",
        productCode: "",
        objectType: "classType",
        hierarchy: "GUANZATE>MACHINE",
        children: [
          {
            name: "SPECOLA",
            description: null,
            startDate: "2023-07-10 06:30:00",
            endDate: "2023-08-08 09:30:00",
            availability: 2880,
            worked: 1524,
            utilization: 0.529,
            id: "40",
            utilizationPercentage: "52.90",
            orderRowId: "",
            productCode: "",
            objectType: "class",
            hierarchy: "GUANZATE>MACHINE>SPECOLA",
            children: [
              {
                id: "7525d280-e90a-432e-8b4d-1f91ae924ac4",
                name: "SPECOLA GUANZATE",
                description: "Specola per Controllo Qualità Guanzate",
                resourceClass: "SPECOLA",
                resourceType: "MACHINE",
                totalAvailableTime: 172800,
                workingTime: 91440,
                waitingTime: 0,
                startDate: "2023-07-10 06:30:00",
                endDate: "2023-08-08 09:30:00",
                availability: 2880,
                worked: 1524,
                utilization: 0.529,
                utilizationPercentage: "52.90",
                orderRowId: "",
                productCode: "",
                objectType: "resource",
                hierarchy: "GUANZATE>MACHINE>SPECOLA>SPECOLA GUANZATE",
                constraintDate: "2023-07-10 06:30:00",
                constraintType: "muststarton",
              },
            ],
            constraintDate: "2023-07-10 06:30:00",
            constraintType: "muststarton",
          },
        ],
        constraintDate: "2023-07-10 06:30:00",
        constraintType: "muststarton",
      },
      {
        name: "WORKER",
        description: null,
        startDate: "2023-07-07 18:00:00",
        endDate: "2023-08-07 12:30:00",
        availability: 960,
        worked: 300,
        utilization: 0.312,
        id: "41",
        utilizationPercentage: "31.20",
        orderRowId: "",
        productCode: "",
        objectType: "classType",
        hierarchy: "GUANZATE>WORKER",
        children: [
          {
            name: "MAGAZZINIERE",
            description: null,
            startDate: "2023-07-07 18:00:00",
            endDate: "2023-08-07 12:30:00",
            availability: 960,
            worked: 300,
            utilization: 0.312,
            id: "42",
            utilizationPercentage: "31.20",
            orderRowId: "",
            productCode: "",
            objectType: "class",
            hierarchy: "GUANZATE>WORKER>MAGAZZINIERE",
            children: [
              {
                id: "9b00073e-663f-4709-ba24-f5e05741c897",
                name: "MAGAZZINIERE_FINITO",
                description: "Magazziniere Guanzate",
                resourceClass: "MAGAZZINIERE",
                resourceType: "WORKER",
                totalAvailableTime: 57600,
                workingTime: 18000,
                waitingTime: 0,
                startDate: "2023-07-07 18:00:00",
                endDate: "2023-08-07 12:30:00",
                availability: 960,
                worked: 300,
                utilization: 0.312,
                utilizationPercentage: "31.20",
                orderRowId: "",
                productCode: "",
                objectType: "resource",
                hierarchy: "GUANZATE>WORKER>MAGAZZINIERE>MAGAZZINIERE_FINITO",
                constraintDate: "2023-07-07 18:00:00",
                constraintType: "muststarton",
              },
            ],
            constraintDate: "2023-07-07 18:00:00",
            constraintType: "muststarton",
          },
        ],
        constraintDate: "2023-07-07 18:00:00",
        constraintType: "muststarton",
      },
    ],
    constraintDate: "2023-07-07 18:00:00",
    constraintType: "muststarton",
  },
  {
    name: "TRADATE",
    description: "Magazzino prodotti finiti",
    startDate: "2023-07-10 16:30:00",
    endDate: "2023-08-14 14:30:00",
    availability: 960,
    worked: 600,
    utilization: 0.625,
    id: "43",
    utilizationPercentage: "62.50",
    orderRowId: "",
    productCode: "",
    objectType: "resourceType",
    hierarchy: "TRADATE",
    children: [
      {
        name: "WORKER",
        description: null,
        startDate: "2023-07-10 16:30:00",
        endDate: "2023-08-14 14:30:00",
        availability: 960,
        worked: 600,
        utilization: 0.625,
        id: "44",
        utilizationPercentage: "62.50",
        orderRowId: "",
        productCode: "",
        objectType: "classType",
        hierarchy: "TRADATE>WORKER",
        children: [
          {
            name: "MAGAZZINIERE",
            description: null,
            startDate: "2023-07-10 16:30:00",
            endDate: "2023-08-14 14:30:00",
            availability: 960,
            worked: 600,
            utilization: 0.625,
            id: "45",
            utilizationPercentage: "62.50",
            orderRowId: "",
            productCode: "",
            objectType: "class",
            hierarchy: "TRADATE>WORKER>MAGAZZINIERE",
            children: [
              {
                id: "818465a3-ae5d-4e32-b95e-ad8304fb73aa",
                name: "MAGAZZINIERE_FINITO_TRADATE",
                description: "Magazziniere Finito Tradate",
                resourceClass: "MAGAZZINIERE",
                resourceType: "WORKER",
                totalAvailableTime: 57600,
                workingTime: 36000,
                waitingTime: 0,
                startDate: "2023-07-10 16:30:00",
                endDate: "2023-08-14 14:30:00",
                availability: 960,
                worked: 600,
                utilization: 0.625,
                utilizationPercentage: "62.50",
                orderRowId: "",
                productCode: "",
                objectType: "resource",
                hierarchy:
                  "TRADATE>WORKER>MAGAZZINIERE>MAGAZZINIERE_FINITO_TRADATE",
                constraintDate: "2023-07-10 16:30:00",
                constraintType: "muststarton",
              },
            ],
            constraintDate: "2023-07-10 16:30:00",
            constraintType: "muststarton",
          },
        ],
        constraintDate: "2023-07-10 16:30:00",
        constraintType: "muststarton",
      },
    ],
    constraintDate: "2023-07-10 16:30:00",
    constraintType: "muststarton",
  },
];

export const dates = {
  startDate: "2023-07-07T14:00:00.000Z",
  endDate: "2023-08-14T10:30:00.000Z",
};