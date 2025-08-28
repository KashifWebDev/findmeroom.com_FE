import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { FeatherIcons } from "../../../../../../shared/components/ui/feather-icons/feather-icons";
import { ISteps } from "../../../../../../shared/data/sign-up-wizard";

@Component({
  selector: "app-wizard-step",
  imports: [FeatherIcons, CommonModule],
  templateUrl: "./wizard-step.html",
  styleUrls: ["./wizard-step.scss"],
})
export class WizardStep {
  readonly stepsData = input<ISteps[]>();
  readonly activeSteps = input<number>();

  ngOnChanges() {
    this.stepsData()?.forEach((data) => {
      if (data.stepNumber < this.activeSteps()!) {
        data.disabled = true;
      } else {
        data.disabled = false;
      }
    });
  }
}
