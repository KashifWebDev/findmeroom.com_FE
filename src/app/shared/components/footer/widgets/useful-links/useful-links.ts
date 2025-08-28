import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { usefulLinkFooterData } from "../../../../data/footer";

@Component({
  selector: "app-useful-links",
  imports: [RouterModule, CommonModule],
  templateUrl: "./useful-links.html",
  styleUrls: ["./useful-links.scss"],
})
export class UsefulLinks {
  public usefulLinkFooterData = usefulLinkFooterData;
  public isLinkData: boolean = false;

  openLink() {
    this.isLinkData = !this.isLinkData;
  }
}
