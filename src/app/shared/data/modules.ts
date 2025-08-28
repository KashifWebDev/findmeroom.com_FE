export interface IModulesButton {
  title: string;
  buttons: IButtons[];
  buttonTag?: boolean;
  state?: boolean;
}

export interface IButtons {
  buttonClass: string;
  buttonText: string;
  span?: boolean;
}

export interface IModulesLabel {
  title: string;
  labels: ILabel[];
}

export interface ILabel {
  labelClass: string;
  labelText: string;
  span?: boolean;
  spanClass?: string;
}

export interface IModulesTitle {
  title: string;
  titleClass: string;
  tagClass: string;
  tag: string;
  heading: string;
  type: string;
  descClass: string;
  desc: string;
  svgIcon: boolean;
  svgClass: boolean;
}
export const modulesButtonData: IModulesButton[] = [
  {
    title: "Rounded button",
    buttons: [
      {
        buttonClass: "btn btn-gradient btn-pill color-1",
        buttonText: "read more",
      },
      {
        buttonClass: "btn btn-gradient btn-pill color-2",
        buttonText: "read more",
      },
      {
        buttonClass: "btn btn-light-bg btn-pill color-2",
        buttonText: "read more",
        span: true,
      },
      {
        buttonClass: "btn btn-white btn-pill color-1",
        buttonText: "read more",
        span: true,
      },
    ],
  },
  {
    title: "Square button",
    buttons: [
      {
        buttonClass: "btn btn-solid color-3 btn-flat",
        buttonText: "read more",
      },
      {
        buttonClass: "btn btn-gradient  btn-flat color-4",
        buttonText: "read more",
      },
      {
        buttonClass: "btn btn-light-bg color-3 btn-flat",
        buttonText: "read more",
      },
    ],
  },
  {
    title: "Other button",
    buttons: [
      {
        buttonClass: "btn btn-gradient color-4",
        buttonText: "read more",
      },
      {
        buttonClass: "btn btn-dashed btn-pill color-1",
        buttonText: "read more",
        span: true,
      },
    ],
  },
  {
    title: "Bootstrap button",
    buttons: [
      {
        buttonClass: "btn btn-primary",
        buttonText: "Primary",
      },
      {
        buttonClass: "btn btn-secondary",
        buttonText: "Secondary",
      },
      {
        buttonClass: "btn btn-success",
        buttonText: "Success",
      },
      {
        buttonClass: "btn btn-danger",
        buttonText: "Danger",
      },
      {
        buttonClass: "btn btn-warning",
        buttonText: "Warning",
      },
      {
        buttonClass: "btn btn-info",
        buttonText: "Info",
      },
      {
        buttonClass: "btn btn-light",
        buttonText: "Light",
      },
      {
        buttonClass: "btn btn-dark",
        buttonText: "Dark",
      },
    ],
  },
  {
    title: "Button tags",
    buttonTag: true,
    buttons: [],
  },
  {
    title: "Outline buttons",
    buttons: [
      {
        buttonClass: "btn btn-outline-primary",
        buttonText: "Primary",
      },
      {
        buttonClass: "btn btn-outline-secondary",
        buttonText: "Secondary",
      },
      {
        buttonClass: "btn btn-outline-success",
        buttonText: "Success",
      },
      {
        buttonClass: "btn btn-outline-danger",
        buttonText: "Danger",
      },
      {
        buttonClass: "btn btn-outline-warning",
        buttonText: "Warning",
      },
      {
        buttonClass: "btn btn-outline-info",
        buttonText: "Info",
      },
      {
        buttonClass: "btn btn-outline-light",
        buttonText: "Light",
      },
      {
        buttonClass: "btn btn-outline-dark",
        buttonText: "Dark",
      },
    ],
  },
  {
    title: "Sizes",
    buttons: [
      {
        buttonClass: "btn btn-primary btn-lg",
        buttonText: "Large button",
      },
      {
        buttonClass: "btn btn-secondary btn-lg",
        buttonText: "Large button",
      },
      {
        buttonClass: "btn btn-primary btn-sm",
        buttonText: "Small button",
      },
      {
        buttonClass: "btn btn-secondary btn-sm",
        buttonText: "Small button",
      },
    ],
  },
  {
    title: "Block level button",
    buttons: [
      {
        buttonClass: "btn btn-primary btn-lg btn-block",
        buttonText: "Block level button",
      },
      {
        buttonClass: "btn btn-secondary btn-lg btn-block",
        buttonText: "Block level button",
      },
    ],
  },
  {
    title: "State",
    state: true,
    buttons: [],
  },
];

export const ModulesLabelData: IModulesLabel[] = [
  {
    title: "Pill label",
    labels: [
      {
        labelClass: "label label-solid label-pill color-1",
        labelText: "new",
      },
      {
        labelClass: "label label-dark label-pill",
        labelText: "new",
      },
      {
        labelClass: "label label-success label-pill",
        labelText: "new",
      },
      {
        labelClass: "label label-danger label-pill",
        labelText: "new",
      },
    ],
  },
  {
    title: "Rounded label",
    labels: [
      {
        labelClass: "label label-gradient color-1",
        labelText: "new",
      },
      {
        labelClass: "label label-dark",
        labelText: "new",
      },
      {
        labelClass: "label label-success",
        labelText: "new",
      },
      {
        labelClass: "label label-danger",
        labelText: "new",
      },
      {
        labelClass: "label label-shadow",
        labelText: "new",
      },
    ],
  },
  {
    title: "Square label",
    labels: [
      {
        labelClass: "label label-dark label-flat",
        labelText: "new",
      },
      {
        labelClass: "label label-success label-flat",
        labelText: "new",
      },
      {
        labelClass: "label label-danger label-flat",
        labelText: "new",
      },
      {
        labelClass: "label label-shadow label-flat",
        labelText: "new",
      },
      {
        labelClass: "label label-light label-flat color-3",
        labelText: "new",
      },
      {
        labelClass: "label label-light label-flat color-4",
        labelText: "new",
      },
    ],
  },
  {
    title: "Large label",
    labels: [
      {
        labelClass: "label label-gradient label-lg color-4",
        labelText: "new",
      },
      {
        labelClass: "label label-solid label-lg label-flat color-3",
        labelText: "new",
      },
      {
        labelClass: "label label-white label-lg label-flat color-3",
        labelText: "new",
      },
      {
        labelClass: "label label-white label-lg color-1",
        labelText: "new",
      },
      {
        labelClass: "label label-white label-lg label-pill",
        labelText: "new",
        span: true,
        spanClass: "gradient-1",
      },
    ],
  },
];

export const modulesTitleData: IModulesTitle[] = [
  {
    title: "Title Style 1",
    titleClass: "title-1 pb-0",
    tagClass: "color-1",
    tag: "sale",
    heading: "Latest For Sale",
    type: "simple",
    svgIcon: false,
    svgClass: false,
    desc: "",
    descClass: "",
  },
  {
    title: "Title Style 2",
    titleClass: "title-2",
    descClass: "mb-0",
    desc: "Discover New York’s best things to do, restaurants, theatre, nightlife and more",
    heading: "Latest Property Listing",
    type: "basic",
    tag: "",
    tagClass: "",
    svgIcon: false,
    svgClass: false,
  },
  {
    title: "Title Style 3",
    titleClass: "title-3 mb-0",
    tag: "Provided",
    heading: "Services",
    desc: "Elegant retreat in Coral setting. This home provides entertaining spaces with kitchen opening",
    type: "simple",
    svgIcon: true,
    svgClass: false,
    descClass: "",
    tagClass: "",
  },
];

export const ModuleImageRatioData = [
  {
    title: "Types of Ratio",
    ratioData: [
      {
        ratio: ".ratio_40 - 40%",
      },
      {
        ratio: ".ratio_45 - 45%",
      },
      {
        ratio: ".ratio2_1 - 50%",
      },
      {
        ratio: ".ratio2_3 - 60%",
      },
      {
        ratio: ".ratio3_2 - 66.66%",
      },
    ],
  },
  {
    title: "Ratio for different shapes",
    ratioData: [
      {
        ratio: ".ratio_landscape - 75%",
      },
      {
        ratio: ".ratio_square - 100%",
      },
      {
        ratio: ".ratio_asos - 127.77%",
      },
      {
        ratio: ".ratio_portrait - 150%",
      },
      {
        ratio: ".ratio1_2 - 200%",
      },
    ],
  },
];

export const modulesImageRatioImagesData = [
  {
    sectionClass: "ratio2_3 pb-0",
    title: 'ratio - "ratio2_3"',
    subTitle: 'Add this class "ratio2_3" for this type of ratio',
    images: [
      {
        id: 1,
        url: "assets/images/1.jpg",
        fileType: "image",
      },
      {
        id: 2,
        url: "assets/images/banner-image.jpg",
        fileType: "image",
      },
      {
        id: 3,
        url: "assets/images/3.jpg",
        fileType: "image",
      },
      {
        id: 4,
        url: "assets/images/4.jpg",
        fileType: "image",
      },
    ],
  },
  {
    sectionClass: "ratio_square pb-0",
    title: 'ratio - "ratio_square"',
    subTitle: 'Add this class "ratio_square" for this type of ratio',
    images: [
      {
        id: 1,
        url: "assets/images/1.jpg",
        fileType: "image",
      },
      {
        id: 2,
        url: "assets/images/banner-image.jpg",
        fileType: "image",
      },
      {
        id: 3,
        url: "assets/images/3.jpg",
        fileType: "image",
      },
      {
        id: 4,
        url: "assets/images/4.jpg",
        fileType: "image",
      },
    ],
  },
  {
    sectionClass: "ratio_portrait",
    title: 'ratio - "ratio_portrait"',
    subTitle: 'Add this class "ratio_portrait" for this type of ratio',
    images: [
      {
        id: 1,
        url: "assets/images/1.jpg",
        fileType: "image",
      },
      {
        id: 2,
        url: "assets/images/banner-image.jpg",
        fileType: "image",
      },
      {
        id: 3,
        url: "assets/images/3.jpg",
        fileType: "image",
      },
      {
        id: 4,
        url: "assets/images/4.jpg",
        fileType: "image",
      },
    ],
  },
];
