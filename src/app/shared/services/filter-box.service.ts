import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FilterBoxService {
  public isOpenLeftFilter: boolean = false;
  public isOpenFilter: boolean = false;
  public viewMap: boolean = false;
}
