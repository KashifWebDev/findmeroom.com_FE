import { Component, input } from "@angular/core";

import { BrandOne } from "./brand-one/brand-one";
import { BrandThree } from "./brand-three/brand-three";
import { BrandTwo } from "./brand-two/brand-two";
import { IBrand } from "../../../../shared/interface/property";

@Component({
  selector: "app-brand",
  imports: [BrandOne, BrandTwo, BrandThree],
  templateUrl: "./brand.html",
  styleUrls: ["./brand.scss"],
})
export class Brand {
  readonly brandData = input<IBrand[]>();
  readonly type = input<string>("");
}
