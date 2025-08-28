import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-edit-user-email-modal",
  imports: [],
  templateUrl: "./edit-user-email-modal.html",
  styleUrls: ["./edit-user-email-modal.scss"],
})
export class EditUserEmailModal {
  modal = inject(NgbModal);
}
