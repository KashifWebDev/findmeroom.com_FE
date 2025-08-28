export interface IPropertySteps {
  id: number;
  title: string;
  subTitle: string;
  stepNumber: number;
  disabled: boolean;
}

export const addPropertyStepsData: IPropertySteps[] = [
  {
    id: 1,
    title: "General",
    subTitle: "Basic Information",
    stepNumber: 1,
    disabled: false,
  },
  {
    id: 2,
    title: "Address",
    subTitle: "Add your place",
    stepNumber: 2,
    disabled: false,
  },
  {
    id: 3,
    title: "Gallery",
    subTitle: "Add your media",
    stepNumber: 3,
    disabled: false,
  },
  {
    id: 4,
    title: "Confirmation",
    subTitle: "Complete details",
    stepNumber: 4,
    disabled: false,
  },
];
