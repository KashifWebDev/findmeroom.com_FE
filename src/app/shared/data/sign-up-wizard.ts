export interface ISteps {
  id: number;
  title: string;
  subTitle: string;
  stepNumber: number;
  disabled: boolean;
}

export const stepsData: ISteps[] = [
  {
    id: 1,
    title: "Get started",
    subTitle: "Account information",
    stepNumber: 1,
    disabled: false,
  },
  {
    id: 2,
    title: "Location",
    subTitle: "Set your address",
    stepNumber: 2,
    disabled: false,
  },
  {
    id: 3,
    title: "Complete",
    subTitle: "Successfully submitted",
    stepNumber: 3,
    disabled: false,
  },
];
