import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AngularSvgIconModule } from "angular-svg-icon";

import { IProvidedServices } from "../../../../../shared/interface/property";

@Component({
  selector: "app-provided-service-one",
  imports: [CommonModule, RouterModule, AngularSvgIconModule],
  templateUrl: "./provided-service-one.html",
  styleUrls: ["./provided-service-one.scss"],
})
export class ProvidedServiceOne {
  readonly providedServices = input<IProvidedServices>();
  readonly tagClass = input<string>();
}
