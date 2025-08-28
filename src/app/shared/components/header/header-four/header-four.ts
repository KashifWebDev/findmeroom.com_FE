import { Component, inject } from "@angular/core";

import { IMenu, NavService } from "../../../../shared/services/nav.service";
import { Menu } from "../../menu/menu";

@Component({
  selector: "app-header-four",
  imports: [Menu],
  templateUrl: "./header-four.html",
  styleUrls: ["./header-four.scss"],
})
export class HeaderFour {
  navServices = inject(NavService);

  public menuItems: IMenu[] = [];

  constructor() {
    this.navServices.items.subscribe(
      (menuItems) => (this.menuItems = menuItems),
    );
  }
}
