import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { FeatherIcons } from "../../../../shared/components/ui/feather-icons/feather-icons";
import { IPropertySteps } from "../../../../shared/data/add-property";

@Component({
  selector: "app-add-property-steps",
  imports: [FeatherIcons, CommonModule],
  templateUrl: "./add-property-steps.html",
  styleUrls: ["./add-property-steps.scss"],
})
export class AddPropertySteps {
  readonly addPropertyStepsData = input<IPropertySteps[]>();
  readonly activeSteps = input<number>();

  ngOnChanges() {
    this.addPropertyStepsData()?.forEach((data) => {
      if (data.stepNumber < this.activeSteps()!) {
        data.disabled = true;
      } else {
        data.disabled = false;
      }
    });
  }
}
