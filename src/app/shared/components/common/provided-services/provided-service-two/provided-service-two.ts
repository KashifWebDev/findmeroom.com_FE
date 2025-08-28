import { Component, input } from "@angular/core";

import { IProvidedServices } from "../../../../../shared/interface/property";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-provided-service-two",
  imports: [FeatherIcons],
  templateUrl: "./provided-service-two.html",
  styleUrls: ["./provided-service-two.scss"],
})
export class ProvidedServiceTwo {
  readonly providedServices = input<IProvidedServices>();
}
