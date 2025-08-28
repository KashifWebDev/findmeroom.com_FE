import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { FeatherIcons } from "../../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-modal-login-form",
  imports: [FeatherIcons, CommonModule, RouterModule],
  templateUrl: "./modal-login-form.html",
  styleUrls: ["./modal-login-form.scss"],
})
export class ModalLoginForm {
  modal = inject(NgbModal);

  readonly tagClass = input<string>();
  readonly buttonClass = input<string>();

  public isShow: boolean = false;
  public inputType: string = "password";

  showPassword() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.inputType = "text";
    } else {
      this.inputType = "password";
    }
  }
}
