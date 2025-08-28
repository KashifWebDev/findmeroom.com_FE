import { CommonModule } from "@angular/common";
import { Component, HostListener, inject, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LayoutService } from "../../../../shared/services/layout.service";
import { Menu } from "../../menu/menu";
import { Currency } from "../widgets/currency/currency";
import { Language } from "../widgets/language/language";
import { Profile } from "../widgets/profile/profile";
import { Wishlist } from "../widgets/wishlist/wishlist";

@Component({
  selector: "app-header-one",
  imports: [
    RouterModule,
    CommonModule,
    Menu,
    Language,
    Wishlist,
    Currency,
    Profile,
  ],
  templateUrl: "./header-one.html",
  styleUrls: ["./header-one.scss"],
})
export class HeaderOne {
  layout = inject(LayoutService);

  readonly headerLogo = input<string>();
  readonly darkHeaderLogo = input<string>();
  readonly headerClass = input<string | undefined>("");
  readonly headerFix = input<boolean | undefined>(false);

  public headerFixed: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 400) {
      this.headerFixed = true;
    } else {
      this.headerFixed = false;
    }
  }
}
