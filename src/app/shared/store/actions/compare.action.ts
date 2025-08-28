import { ILatestForRent } from "../../interface/property";

// Compare
export class GetCompareData {
  static readonly type = "[compare] Get";
}

export class AddCompareItem {
  static readonly type = "[compare] Add";
  constructor(public payload: ILatestForRent) {}
}

export class RemoveCompareItem {
  static readonly type = "[compare] Delete";
  constructor(public id: number) {}
}
