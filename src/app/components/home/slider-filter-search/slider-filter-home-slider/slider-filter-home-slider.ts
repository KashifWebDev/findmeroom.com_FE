import { Component, inject } from "@angular/core";

import { FilterBox } from "../../../../shared/components/common/home-section-slider/filter-box/filter-box";
import { HomeSectionSlider } from "../../../../shared/components/common/home-section-slider/home-section-slider";
import { LookingForIcons } from "../../../../shared/components/common/home-section-slider/looking-for-icons/looking-for-icons";
import { IHomeSectionSlider } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-slider-filter-home-slider",
  imports: [HomeSectionSlider, LookingForIcons, FilterBox],
  templateUrl: "./slider-filter-home-slider.html",
  styleUrls: ["./slider-filter-home-slider.scss"],
})
export class SliderFilterHomeSlider {
  private propertyService = inject(PropertyService);

  public title = "slider_filter_search";

  public homeSectionSliderData: IHomeSectionSlider[] = [];

  ngOnInit() {
    this.propertyService.homeSliderData().subscribe((response) => {
      this.homeSectionSliderData = response.homeSection.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
