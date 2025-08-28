import { Component, input } from "@angular/core";

import { IImg } from "../../../../shared/interface/property";

@Component({
  selector: "app-property-images",
  imports: [],
  templateUrl: "./property-images.html",
  styleUrls: ["./property-images.scss"],
})
export class PropertyImages {
  readonly propertyImageData = input<IImg[]>();
}
