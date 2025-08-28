import { CommonModule } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { Router } from "@angular/router";

import {
  ISideMenu,
  userPanelSideMenu,
} from "../../../../../shared/data/user-panel";

@Component({
  selector: "app-user-panel-side-menu",
  imports: [CommonModule],
  templateUrl: "./user-panel-side-menu.html",
  styleUrls: ["./user-panel-side-menu.scss"],
})
export class UserPanelSideMenu {
  private router = inject(Router);

  @Input() activeTab: string;

  public userPanelSideMenu = userPanelSideMenu;

  getPage(data: ISideMenu) {
    this.activeTab = data.value;
    void this.router.navigate([data.path]);
  }
}
