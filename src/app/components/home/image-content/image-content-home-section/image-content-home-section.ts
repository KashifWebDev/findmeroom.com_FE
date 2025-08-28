import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { ISliderImagesData } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-image-content-home-section",
  imports: [CarouselModule, RouterModule],
  templateUrl: "./image-content-home-section.html",
  styleUrls: ["./image-content-home-section.scss"],
})
export class ImageContentHomeSection {
  private propertyService = inject(PropertyService);

  public sliderImages: ISliderImagesData[];

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeOut: 1500,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  constructor() {
    this.propertyService.getSliderData().subscribe((response) => {
      this.sliderImages = response.slider;
    });
  }
}
