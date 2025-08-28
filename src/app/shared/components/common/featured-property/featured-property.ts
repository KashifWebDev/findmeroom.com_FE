import { Component, input } from "@angular/core";

import { FeaturedPropertyOne } from "./featured-property-one/featured-property-one";
import { FeaturedPropertyThree } from "./featured-property-three/featured-property-three";
import { FeaturedPropertyTwo } from "./featured-property-two/featured-property-two";
import { IFeaturedProperty } from "../../../../shared/interface/property";

@Component({
  selector: "app-featured-property",
  imports: [FeaturedPropertyOne, FeaturedPropertyTwo, FeaturedPropertyThree],
  templateUrl: "./featured-property.html",
  styleUrls: ["./featured-property.scss"],
})
export class FeaturedProperty {
  readonly featuredProperty = input<IFeaturedProperty[]>();
  readonly type = input<string>("");
  readonly tagClass = input<string>("");
}
