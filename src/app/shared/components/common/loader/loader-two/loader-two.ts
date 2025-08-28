import { Component } from "@angular/core";

@Component({
  selector: "app-loader-two",
  imports: [],
  templateUrl: "./loader-two.html",
  styleUrls: ["./loader-two.scss"],
})
export class LoaderTwo {
  public show: boolean = true;

  constructor() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
}
