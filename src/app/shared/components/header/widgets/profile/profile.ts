import { Component, inject, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { LogInModal } from "../../../common/modal/log-in-modal/log-in-modal";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-profile",
  imports: [FeatherIcons],
  templateUrl: "./profile.html",
  styleUrls: ["./profile.scss"],
})
export class Profile {
  private platformId = inject(PLATFORM_ID);
  private modal = inject(NgbModal);
  private router = inject(Router);

  public loginModal: boolean = false;
  public buttonClass: string = "";
  public tagClass: string = "";
  public theme: number;
  public imageURL: string;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.location.pathname.includes("theme/corporate")) {
        this.loginModal = true;
        this.buttonClass = "btn-solid color-3";
        this.tagClass = "color-3";
        this.theme = 3;
        this.imageURL = "assets/images/property/11.jpg";
      } else if (window.location.pathname.includes("theme/corporate")) {
        this.loginModal = true;
        this.buttonClass = "btn-solid color-7";
        this.tagClass = "color-7";
        this.theme = 5;
        this.imageURL = "assets/images/property/25.jpg";
      }
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
