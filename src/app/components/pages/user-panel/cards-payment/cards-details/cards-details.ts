import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { EditCardModal } from "../../../../../shared/components/common/modal/edit-card-modal/edit-card-modal";
import { ICards } from "../../../../../shared/data/user-panel";

@Component({
  selector: "app-cards-details",
  imports: [CommonModule],
  templateUrl: "./cards-details.html",
  styleUrls: ["./cards-details.scss"],
})
export class CardsDetails {
  private modal = inject(NgbModal);

  readonly cardsData = input<ICards>();

  editCard() {
    this.modal.open(EditCardModal, { centered: true });
  }
}
