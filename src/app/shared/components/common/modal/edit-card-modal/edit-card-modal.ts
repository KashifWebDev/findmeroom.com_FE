import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-edit-card-modal",
  imports: [],
  templateUrl: "./edit-card-modal.html",
  styleUrls: ["./edit-card-modal.scss"],
})
export class EditCardModal {
  modal = inject(NgbModal);
}
