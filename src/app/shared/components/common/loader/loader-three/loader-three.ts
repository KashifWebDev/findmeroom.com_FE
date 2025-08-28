import { Component } from "@angular/core";

@Component({
  selector: "app-loader-three",
  imports: [],
  templateUrl: "./loader-three.html",
  styleUrls: ["./loader-three.scss"],
})
export class LoaderThree {
  public show: boolean = true;

  constructor() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
}
