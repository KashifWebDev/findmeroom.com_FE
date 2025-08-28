import { Component, input } from "@angular/core";

import { SliderFour } from "./slider-four/slider-four";
import { SliderOne } from "./slider-one/slider-one";
import { SliderThree } from "./slider-three/slider-three";
import { SliderTwo } from "./slider-two/slider-two";
import { IHomeSectionSlider } from "../../../../shared/interface/property";

@Component({
  selector: "app-home-section-slider",
  imports: [SliderOne, SliderTwo, SliderThree, SliderFour],
  templateUrl: "./home-section-slider.html",
  styleUrls: ["./home-section-slider.scss"],
})
export class HomeSectionSlider {
  readonly homeSectionSliderData = input<IHomeSectionSlider[]>([]);
  readonly type = input<string>("");
}
