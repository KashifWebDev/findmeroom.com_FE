export interface IDetails {
  id: number;
  title: string;
  icon: string;
  value: string;
  details?: string;
  list?: boolean;
  listDetails?: IListData[];
}

export interface IListData {
  data: string;
}

export const contactDetailsData = [
  {
    id: 1,
    title: "Where ?",
    icon: "map-pin",
    value: "where",
    details:
      "549 Sulphur Springs Road <br> Downers Grove, IL 60515 <br> +91 361264100",
  },
  {
    id: 2,
    title: "Second branch",
    icon: "map-pin",
    value: "second_branch",
    details:
      "5415 Spring garden Road <br> Halifax, IL 97230 <br> +91 187230014",
  },
  {
    id: 3,
    title: "Online service",
    icon: "mail",
    value: "online_service",
    list: true,
    listDetails: [
      {
        data: "Inquiries: sheltos@.in",
      },
      {
        data: "Support: help@.in",
      },
      {
        data: "+86 163 - 451 - 7894",
      },
    ],
  },
];
