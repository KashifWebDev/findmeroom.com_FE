import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  public config = {
    settings: {
      layout_type: "",
      layout_version: "",
    },
  };

  public headerStyle: string;
  public headerLogo: string;
  public headerClass: string;
  public headerFix: boolean = false;

  constructor() {}
}
