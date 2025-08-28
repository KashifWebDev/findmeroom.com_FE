import { Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-advance-filter-mortgage",
  imports: [ReactiveFormsModule],
  templateUrl: "./advance-filter-mortgage.html",
  styleUrls: ["./advance-filter-mortgage.scss"],
})
export class AdvanceFilterMortgage {
  private fb = inject(FormBuilder);

  myForm = new FormGroup({
    loan_amount: new FormControl(""),
    down_payment: new FormControl(""),
    interest: new FormControl(""),
    years: new FormControl(""),
  });

  onSubmit(_form: FormGroup) {}
}
