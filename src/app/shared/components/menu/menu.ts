import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TranslateModule } from "@ngx-translate/core";

import { IMenu, NavService } from "../../services/nav.service";
import { FeatherIcons } from "../ui/feather-icons/feather-icons";

@Component({
  selector: "app-menu",
  imports: [FeatherIcons, CommonModule, RouterModule, TranslateModule],
  providers: [NavService],
  templateUrl: "./menu.html",
  styleUrls: ["./menu.scss"],
})
export class Menu {
  navServices = inject(NavService);

  readonly icon = input<boolean>();
  readonly menuRight = input<boolean>(false);

  public menuItems: IMenu[] = [];
  public isOpenMenu: boolean = false;
  public open: boolean = false;

  constructor() {
    this.navServices.items.subscribe(
      (menuItems) => (this.menuItems = menuItems),
    );
  }

  openSideMenu() {
    this.isOpenMenu = true;
  }

  closeSideMenu() {
    this.isOpenMenu = false;
  }

  openMenu(item: IMenu) {
    if (!item.active) {
      this.menuItems.forEach((a: IMenu) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: IMenu) => {
          if (b.section) {
            b.section.forEach((child) => {
              if (b.section?.includes(item)) {
                child.active = false;
              }
            });
          }
          if (a.children?.includes(item)) {
            b.active = false;
          }
          if (b.children) {
            b.children?.forEach((c: IMenu) => {
              if (b.children?.includes(item)) {
                c.active = false;
              }
            });
          }
        });
        return;
      });
    }
    item.active = !item.active;
  }
}
