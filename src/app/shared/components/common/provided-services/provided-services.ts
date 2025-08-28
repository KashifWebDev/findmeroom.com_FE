import { Component, input } from "@angular/core";

import { ProvidedServiceOne } from "./provided-service-one/provided-service-one";
import { ProvidedServiceThree } from "./provided-service-three/provided-service-three";
import { ProvidedServiceTwo } from "./provided-service-two/provided-service-two";
import { IProvidedServices } from "../../../../shared/interface/property";

@Component({
  selector: "app-provided-services",
  imports: [ProvidedServiceOne, ProvidedServiceTwo, ProvidedServiceThree],
  templateUrl: "./provided-services.html",
  styleUrls: ["./provided-services.scss"],
})
export class ProvidedServices {
  readonly providedServices = input<IProvidedServices>();
  readonly providedServicesData = input<IProvidedServices[]>();
  readonly type = input<string>("");
  readonly tagClass = input<string>();
}
