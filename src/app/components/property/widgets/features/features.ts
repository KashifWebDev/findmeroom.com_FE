import { Component, input } from "@angular/core";

import { IFeaturesData } from "../../../../shared/interface/property";

@Component({
  selector: "app-features",
  imports: [],
  templateUrl: "./features.html",
  styleUrls: ["./features.scss"],
})
export class Features {
  readonly featuresData = input<IFeaturesData[]>();
}
