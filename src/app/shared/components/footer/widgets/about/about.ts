import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { footerAboutData } from "../../../../data/footer";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-about",
  imports: [CommonModule, RouterModule, FeatherIcons],
  templateUrl: "./about.html",
  styleUrls: ["./about.scss"],
})
export class About {
  readonly icon = input<boolean>(false);

  public footerAboutData = footerAboutData;
  public isAboutData: boolean = false;

  openAbout() {
    this.isAboutData = !this.isAboutData;
  }
}
