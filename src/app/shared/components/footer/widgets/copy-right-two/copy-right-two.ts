import { Component } from "@angular/core";

@Component({
  selector: "app-copy-right-two",
  imports: [],
  templateUrl: "./copy-right-two.html",
  styleUrls: ["./copy-right-two.scss"],
})
export class CopyRightTwo {
  public year = new Date().getFullYear();
}
