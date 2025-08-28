import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FeatherIcons } from "../../../../../shared/components/ui/feather-icons/feather-icons";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.html",
  styleUrls: ["./login-form.scss"],
  imports: [FeatherIcons, CommonModule, RouterModule],
})
export class LoginForm {
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
