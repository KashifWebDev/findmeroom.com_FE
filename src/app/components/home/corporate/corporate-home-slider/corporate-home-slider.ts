import { Component, inject } from "@angular/core";

import { HomeSectionSlider } from "../../../../shared/components/common/home-section-slider/home-section-slider";
import { IHomeSectionSlider } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-corporate-home-slider",
  imports: [HomeSectionSlider],
  templateUrl: "./corporate-home-slider.html",
  styleUrls: ["./corporate-home-slider.scss"],
})
export class CorporateHomeSlider {
  private propertyService = inject(PropertyService);

  public title = "corporate";

  public homeSectionSliderData: IHomeSectionSlider[] = [];

  ngOnInit() {
    this.propertyService.homeSliderData().subscribe((response) => {
      this.homeSectionSliderData = response.homeSection.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
