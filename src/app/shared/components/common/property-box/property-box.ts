import { Component, input } from "@angular/core";

import { PropertyBoxFour } from "./property-box-four/property-box-four";
import { PropertyBoxOne } from "./property-box-one/property-box-one";
import { PropertyBoxThree } from "./property-box-three/property-box-three";
import { PropertyBoxTwo } from "./property-box-two/property-box-two";
import {
  ILatestForRent,
  ILatestForSale,
} from "../../../../shared/interface/property";

@Component({
  selector: "app-property-box",
  imports: [PropertyBoxOne, PropertyBoxTwo, PropertyBoxThree, PropertyBoxFour],
  templateUrl: "./property-box.html",
  styleUrls: ["./property-box.scss"],
})
export class PropertyBox {
  readonly title = input<string>("");
  readonly propertyData = input<ILatestForSale>();
  readonly latestForRentData = input<ILatestForRent>();
  readonly propertyListingData = input<ILatestForRent>();
  readonly latestPropertyData = input<ILatestForRent[]>();
  readonly propertyListingDataClassic = input<ILatestForRent>();
  readonly type = input<string>("");
  readonly textColor = input<boolean>(false);
  readonly tagClass = input<string>("");
  readonly carousel = input<boolean>(false);
  readonly data = input<number>();
  readonly listView = input<boolean>(false);
  readonly thumbnail = input<boolean>(false);
  readonly thumbnail_video = input<boolean>(false);
  readonly gridImages = input<boolean>(false);
}
