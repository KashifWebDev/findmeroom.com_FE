import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-new-card-modal",
  imports: [],
  templateUrl: "./add-new-card-modal.html",
  styleUrls: ["./add-new-card-modal.scss"],
})
export class AddNewCardModal {
  modal = inject(NgbModal);
}
