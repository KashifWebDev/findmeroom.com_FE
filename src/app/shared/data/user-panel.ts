export interface ISideMenu {
  id: number;
  title: string;
  value: string;
  path: string;
}

export interface ICards {
  id: number;
  cardType: string;
  cardName: string;
  cardNumber: string;
  expDate: string;
  holderName: string;
  cardImage: string;
}
export const userPanelSideMenu: ISideMenu[] = [
  {
    id: 1,
    title: "dashboard",
    value: "dashboard",
    path: "/page/user/user-dashboard",
  },
  {
    id: 2,
    title: "my listing",
    value: "listing",
    path: "/page/user/my-listing",
  },
  {
    id: 3,
    title: "create property",
    value: "create-property",
    path: "/page/user/create-property",
  },
  {
    id: 4,
    title: "my profile",
    value: "profile",
    path: "/page/user/my-profile",
  },
  {
    id: 5,
    title: "favourites",
    value: "favourite",
    path: "/page/user/favourite",
  },
  {
    id: 6,
    title: "cards & payment",
    value: "card-payment",
    path: "/page/user/cards-payment",
  },
  {
    id: 7,
    title: "privacy",
    value: "privacy",
    path: "/page/user/privacy",
  },
  {
    id: 8,
    title: "log out",
    value: "logout",
    path: "/theme/corporate",
  },
];

export const salesOverviewCommonData = [
  {
    title: "Earned today",
    earned: "31415",
    pr: "+30%",
    labelColor: "success",
  },
  {
    title: "Earned weekly",
    earned: "78812",
    pr: "+20%",
    labelColor: "success",
  },
  {
    title: "Earned monthly",
    earned: "67810",
    pr: "-10%",
    labelColor: "danger",
  },
];

export const propertyOverviewData = [
  {
    img: "assets/images/property/2.jpg",
    title: "Orchard House",
    type: "Sold",
    date: "15/2/22",
    status: "Paid",
  },
  {
    img: "assets/images/property/3.jpg",
    title: "Neverland",
    type: "Sold",
    date: "8/9/22",
    status: "Paid",
  },
  {
    img: "assets/images/property/4.jpg",
    title: "Sea Breezes",
    type: "Sold",
    date: "26/10/22",
    status: "Paid",
  },
];

export const cardsData: ICards[] = [
  {
    id: 1,
    cardType: "master",
    cardName: "Credit",
    cardNumber: "XXXX-XXXX-XXXX-3401",
    expDate: "12/24",
    holderName: "Zack Lee",
    cardImage: "assets/images/icon/master.png",
  },
  {
    id: 2,
    cardType: "visa",
    cardName: "Credit",
    cardNumber: "XXXX-XXXX-XXXX-3401",
    expDate: "12/24",
    holderName: "Zack Lee",
    cardImage: "assets/images/icon/visa.png",
  },
  {
    id: 3,
    cardType: "american-express",
    cardName: "Credit",
    cardNumber: "XXXX-XXXX-XXXX-3401",
    expDate: "12/24",
    holderName: "Zack Lee",
    cardImage: "assets/images/icon/american.jpg",
  },
];
