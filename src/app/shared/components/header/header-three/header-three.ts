import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { LayoutService } from "../../../../shared/services/layout.service";
import { LogInModal } from "../../common/modal/log-in-modal/log-in-modal";
import { Menu } from "../../menu/menu";
import { FeatherIcons } from "../../ui/feather-icons/feather-icons";
import { Search } from "../widgets/search/search";

@Component({
  selector: "app-header-three",
  imports: [RouterModule, CommonModule, Menu, Search, FeatherIcons],
  templateUrl: "./header-three.html",
  styleUrls: ["./header-three.scss"],
})
export class HeaderThree {
  layout = inject(LayoutService);
  private modal = inject(NgbModal);
  private router = inject(Router);

  readonly headerLogo = input<string>();
  readonly darkHeaderLogo = input<string>();
  readonly headerClass = input<string>();

  public darkFooterLogo = "assets/images/logo/9.png";

  public loginModal: boolean = false;
  public buttonClass: string = "";
  public tagClass: string = "";
  public theme: number;
  public imageURL: string;

  constructor() {
    if (
      window.location.pathname.includes("/theme/classic") ||
      window.location.pathname.includes("/theme/search-tab") ||
      window.location.pathname.includes("/theme/modern-video") ||
      window.location.pathname.includes("/theme/map-v-search") ||
      window.location.pathname.includes("/theme/map-h-search")
    ) {
      this.loginModal = true;
      this.buttonClass = "btn-gradient color-4";
      this.tagClass = "color-4";
      this.theme = 4;
      this.imageURL = "assets/images/property/15.jpg";
    }
  }

  openModal() {
    if (this.loginModal == true) {
      const modalRef = this.modal.open(LogInModal, {
        centered: true,
        size: "lg",
      });
      modalRef.componentInstance.buttonClass = this.buttonClass;
      modalRef.componentInstance.tagClass = this.tagClass;
      modalRef.componentInstance.theme = this.theme;
      modalRef.componentInstance.imageURL = this.imageURL;
    } else {
      void this.router.navigate(["/page/other-pages/log-in"]);
    }
  }
}
