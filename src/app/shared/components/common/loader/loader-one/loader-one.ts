import { Component } from "@angular/core";

@Component({
  selector: "app-loader-one",
  imports: [],
  templateUrl: "./loader-one.html",
  styleUrls: ["./loader-one.scss"],
})
export class LoaderOne {
  public show: boolean = true;

  constructor() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
}
