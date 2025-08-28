import { IPropertySearch } from "../interface/property";

export const propertySearchData: IPropertySearch[] = [
  {
    id: 1,
    heading: "Any Country",
    button: false,
    listData: [
      {
        data: "Any Location in Country",
      },
      {
        data: "Australia",
      },
      {
        data: "Brazil",
      },
      {
        data: "New York",
      },
      {
        data: "USA",
      },
    ],
  },
  {
    id: 2,
    heading: "Any City",
    button: false,
    listData: [
      {
        data: "Any Location in City",
      },
      {
        data: "Ahmedabad",
      },
      {
        data: "Surat",
      },
      {
        data: "Vadodara",
      },
      {
        data: "Junagadh",
      },
    ],
  },
  {
    id: 3,
    heading: "Property Type",
    button: true,
    listData: [
      {
        data: "Any Property Type",
      },
      {
        data: "Office",
      },
      {
        data: "Appartmant",
      },
      {
        data: "House",
      },
      {
        data: "Villa",
      },
    ],
  },
];
