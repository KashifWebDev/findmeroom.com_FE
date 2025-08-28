import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { ModalLoginForm } from "../widgets/modal-login-form/modal-login-form";
import { ModalRegisterForm } from "../widgets/modal-register-form/modal-register-form";

@Component({
  selector: "app-log-in-modal",
  imports: [CommonModule, ModalLoginForm, ModalRegisterForm],
  templateUrl: "./log-in-modal.html",
  styleUrls: ["./log-in-modal.scss"],
})
export class LogInModal {
  modal = inject(NgbModal);

  readonly buttonClass = input<string>("");
  readonly tagClass = input<string>("");
  readonly theme = input<number>();
  readonly imageURL = input<string>();

  public activeTab: string = "login";
  public isShow: boolean = false;
  public isShow1: boolean = false;
  public inputType: string = "password";
  public inputType1: string = "password";

  changeTab(value: string) {
    this.activeTab = value;
  }

  showPassword(value: string) {
    if (value == "login") {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    }
    if (value == "register") {
      this.isShow1 = !this.isShow1;
      if (this.isShow1) {
        this.inputType1 = "text";
      } else {
        this.inputType1 = "password";
      }
    }
  }
}
