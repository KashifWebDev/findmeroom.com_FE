import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { CardsDetails } from "./cards-details/cards-details";
import { AddNewCardModal } from "../../../../shared/components/common/modal/add-new-card-modal/add-new-card-modal";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { cardsData } from "../../../../shared/data/user-panel";
import { UserInfo } from "../widgets/user-info/user-info";
import { UserPanelSideMenu } from "../widgets/user-panel-side-menu/user-panel-side-menu";

@Component({
  selector: "app-cards-payment",
  templateUrl: "./cards-payment.html",
  styleUrls: ["./cards-payment.scss"],
  imports: [Breadcrumb, UserInfo, UserPanelSideMenu, CardsDetails],
})
export class CardsPayment {
  private modal = inject(NgbModal);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Dashboard";
  public parent = "Home";
  public child = "Cards & Payment";

  public cardsData = cardsData;

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";
  ngOnInit() {
    document.documentElement.style.setProperty(
      "--theme-default",
      this.theme_default3,
    );
    document.documentElement.style.setProperty(
      "--theme-default3",
      this.theme_default3,
    );
    document.documentElement.style.setProperty(
      "--theme-default4",
      this.theme_default4,
    );
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }

  addCard() {
    this.modal.open(AddNewCardModal, { centered: true });
  }
}
