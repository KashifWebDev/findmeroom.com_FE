import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { relandEstateFooterData } from "../../../../data/footer";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-reland-estate",
  imports: [FeatherIcons, CommonModule, RouterModule],
  templateUrl: "./reland-estate.html",
  styleUrls: ["./reland-estate.scss"],
})
export class RelandEstate {
  public relandEstateFooterData = relandEstateFooterData;
  public isRelandData: boolean = false;

  openReland() {
    this.isRelandData = !this.isRelandData;
  }
}
