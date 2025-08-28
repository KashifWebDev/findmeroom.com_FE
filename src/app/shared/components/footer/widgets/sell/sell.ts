import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { sellFooterData } from "../../../../data/footer";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-sell",
  imports: [FeatherIcons, CommonModule, RouterModule],
  templateUrl: "./sell.html",
  styleUrls: ["./sell.scss"],
})
export class Sell {
  public sellFooterData = sellFooterData;
  public isSellData: boolean = false;

  openSell() {
    this.isSellData = !this.isSellData;
  }
}
