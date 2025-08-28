import { Component, output, input } from "@angular/core";

import Swal from "sweetalert2";

import {
  IAccountInformation,
  IAddressInformation,
} from "../../../../../shared/interface/property";

@Component({
  selector: "app-completed-form",
  imports: [],
  templateUrl: "./completed-form.html",
  styleUrls: ["./completed-form.scss"],
})
export class CompletedForm {
  readonly accountData = input<IAccountInformation>();
  readonly addressData = input<IAddressInformation>();

  readonly activeSteps = output<number>();

  public activeStep: number = 3;

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

  submit() {
    void Swal.fire({
      title: "Are you sure you want to submit the form?",
      text: "please confirm the details",
      icon: "success",
      confirmButtonText: "submit",
      confirmButtonColor: "#e64942",
      showCancelButton: true,
      cancelButtonColor: "#efefef",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  }
}
