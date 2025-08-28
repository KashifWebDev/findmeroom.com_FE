import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-edit-user-details-modal",
  imports: [],
  templateUrl: "./edit-user-details-modal.html",
  styleUrls: ["./edit-user-details-modal.scss"],
})
export class EditUserDetailsModal {
  modal = inject(NgbModal);
}
