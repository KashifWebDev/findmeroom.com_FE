import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { EditUserDetailsModal } from "../../../../../shared/components/common/modal/edit-user-details-modal/edit-user-details-modal";
import { EditUserEmailModal } from "../../../../../shared/components/common/modal/edit-user-email-modal/edit-user-email-modal";
import { EditUserPasswordModal } from "../../../../../shared/components/common/modal/edit-user-password-modal/edit-user-password-modal";
import { FeatherIcons } from "../../../../../shared/components/ui/feather-icons/feather-icons";

@Component({
  selector: "app-user-details",
  imports: [FeatherIcons],
  templateUrl: "./user-details.html",
  styleUrls: ["./user-details.scss"],
})
export class UserDetails {
  private modal = inject(NgbModal);

  editDetails() {
    this.modal.open(EditUserDetailsModal, { size: "lg", centered: true });
  }

  editEmail() {
    this.modal.open(EditUserEmailModal, {
      centered: true,
    });
  }

  editPassword() {
    this.modal.open(EditUserPasswordModal, {
      centered: true,
    });
  }
}
