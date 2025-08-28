import { CommonModule } from "@angular/common";
import { Component, output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterModule } from "@angular/router";

import { FeatherIcons } from "../../../../../shared/components/ui/feather-icons/feather-icons";
import { IAccountInformation } from "../../../../../shared/interface/property";

@Component({
  selector: "app-account-information",
  templateUrl: "./account-information.html",
  styleUrls: ["./account-information.scss"],
  imports: [FeatherIcons, CommonModule, ReactiveFormsModule, RouterModule],
})
export class AccountInformation {
  readonly activeSteps = output<number>();
  readonly accountInformation = output<IAccountInformation>();

  public activeStep: number = 1;
  public validate: boolean = false;
  public isShow: boolean = false;
  public inputType: string = "password";

  myForm = new FormGroup({
    user_name: new FormControl("", Validators.required),
    mobile: new FormControl("", [
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  next(myForm: FormGroup) {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
    this.accountInformation.emit(myForm.value);
  }

  showPassword() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.inputType = "text";
    } else {
      this.inputType = "password";
    }
  }

  get user_name() {
    return this.myForm.get("user_name");
  }

  get mobile() {
    return this.myForm.get("mobile");
  }

  get email() {
    return this.myForm.get("email");
  }

  get password() {
    return this.myForm.get("password");
  }
}
