import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { socialFooterData } from "../../../../data/footer";

@Component({
  selector: "app-social",
  imports: [RouterModule, CommonModule],
  templateUrl: "./social.html",
  styleUrls: ["./social.scss"],
})
export class Social {
  public socialFooterData = socialFooterData;
  public isSocialData: boolean = false;

  openSocial() {
    this.isSocialData = !this.isSocialData;
  }
}
