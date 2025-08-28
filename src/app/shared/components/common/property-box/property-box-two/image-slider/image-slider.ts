import { Component, input } from "@angular/core";

import { LightboxModule } from "ng-gallery/lightbox";
import { CarouselModule } from "ngx-owl-carousel-o";

import { ILatestForRent } from "../../../../../../shared/interface/property";

@Component({
  selector: "app-image-slider",
  imports: [CarouselModule, LightboxModule],
  templateUrl: "./image-slider.html",
  styleUrls: ["./image-slider.scss"],
})
export class ImageSlider {
  readonly latestForRentData = input<ILatestForRent>();
  readonly tagClass = input<string>();
  readonly listView = input<boolean>(false);
  readonly thumbnail = input<boolean>(false);
  readonly thumbnail_video = input<boolean>(false);
  readonly gridImages = input<boolean>(false);

  public selectedImage: string;

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  };

  public thumbnailCarouselOptions = {
    items: 4,
    margin: 10,
    center: true,
    loop: true,
    nav: false,
    dots: false,
  };

  changeImage(image: string) {
    this.selectedImage = image;
  }
}
