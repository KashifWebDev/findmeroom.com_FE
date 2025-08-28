import { CommonModule } from "@angular/common";
import { Component, HostListener, inject, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LayoutService } from "../../../../shared/services/layout.service";
import { Menu } from "../../menu/menu";
import { Contact } from "../widgets/contact/contact";
import { Currency } from "../widgets/currency/currency";
import { Language } from "../widgets/language/language";
import { Profile } from "../widgets/profile/profile";
import { SearchTwo } from "../widgets/search-two/search-two";
import { Wishlist } from "../widgets/wishlist/wishlist";

@Component({
  selector: "app-header-two",
  imports: [
    RouterModule,
    CommonModule,
    Menu,
    Language,
    Wishlist,
    Currency,
    Profile,
    Contact,
    SearchTwo,
  ],
  templateUrl: "./header-two.html",
  styleUrls: ["./header-two.scss"],
})
export class HeaderTwo {
  layout = inject(LayoutService);

  readonly headerFix = input<boolean | undefined>(false);
  readonly headerLogo = input<string>();
  readonly darkHeaderLogo = input<string>();
  readonly darkFooterLogo = input<string>();
  readonly darkThemeHeaderLogo = input<string>();

  public headerFixed: boolean = false;
  public isOpenSearch: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 400) {
      this.headerFixed = true;
    } else {
      this.headerFixed = false;
    }
  }

  openSearch() {
    this.isOpenSearch = !this.isOpenSearch;
  }
}
