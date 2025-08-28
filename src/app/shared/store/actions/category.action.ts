import { IAreaFilter, IPriceFilter } from "../../interface/property";

// Category Filter
export class GetCategory {
  static readonly type = "[category] Get";
  constructor(
    public tags: string[],
    public price: IPriceFilter,
    public area: IAreaFilter,
    public category: string[],
    public filterValue: string,
  ) {}
}
