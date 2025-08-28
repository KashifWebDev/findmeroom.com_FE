import { Component, inject } from "@angular/core";

import { HomeSectionSlider } from "../../../../shared/components/common/home-section-slider/home-section-slider";
import { IHomeSectionSlider } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-classic-home-section",
  imports: [HomeSectionSlider],
  templateUrl: "./classic-home-section.html",
  styleUrls: ["./classic-home-section.scss"],
})
export class ClassicHomeSection {
  propertyService = inject(PropertyService);

  public title = "classic";
  public homeSectionSliderData: IHomeSectionSlider[] = [];

  ngOnInit() {
    this.propertyService.homeSliderData().subscribe((response) => {
      this.homeSectionSliderData = response.homeSection.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
