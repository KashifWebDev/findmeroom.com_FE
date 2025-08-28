import { Component, inject, input } from "@angular/core";

import {
  Gallery,
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from "ng-gallery";
import { Lightbox, LightboxModule } from "ng-gallery/lightbox";
import { CarouselModule } from "ngx-owl-carousel-o";

import { IImg, ILatestForRent } from "../../../../shared/interface/property";

@Component({
  selector: "app-property-image-slider-home-section",
  imports: [CarouselModule, LightboxModule],
  templateUrl: "./property-image-slider-home-section.html",
  styleUrls: ["./property-image-slider-home-section.scss"],
})
export class PropertyImageSliderHomeSection {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);

  readonly propertyImageSliderHome = input<IImg[]>();
  readonly propertyDetails = input<ILatestForRent>();

  public items: GalleryItem[];
  public images: IImg[] = [];

  public Options = {
    items: 3,
    loop: true,
    nav: false,
    dots: false,
  };

  openLightBox() {
    this.items = this.propertyImageSliderHome()!.map(
      (item) => new ImageItem({ src: item.url, thumb: item.url }),
    );

    const lightboxRef = this.gallery.ref("lightbox");

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open();
    lightboxRef.load(this.items);
  }

  openLightBoxDynamic(data: IImg[]) {
    this.images = [];
    data.forEach((image) => {
      if (image.fileType == "image") {
        this.images.push(image);
      }
    });

    this.items = this.images.map(
      (item) => new ImageItem({ src: item.url, thumb: item.url }),
    );

    const lightboxRef = this.gallery.ref("lightbox");

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open();
    lightboxRef.load(this.items);
  }
}
