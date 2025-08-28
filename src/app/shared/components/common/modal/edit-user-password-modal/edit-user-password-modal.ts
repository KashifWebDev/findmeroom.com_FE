import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-edit-user-password-modal",
  imports: [],
  templateUrl: "./edit-user-password-modal.html",
  styleUrls: ["./edit-user-password-modal.scss"],
})
export class EditUserPasswordModal {
  modal = inject(NgbModal);
}
