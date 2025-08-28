import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { buyFooterData } from "../../../../data/footer";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-buy",
  imports: [FeatherIcons, CommonModule, RouterModule],
  templateUrl: "./buy.html",
  styleUrls: ["./buy.scss"],
})
export class Buy {
  public buyFooterData = buyFooterData;
  public isBuyData: boolean = false;

  openBuy() {
    this.isBuyData = !this.isBuyData;
  }
}
