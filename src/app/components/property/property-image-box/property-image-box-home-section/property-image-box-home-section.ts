import { Component, inject, input } from "@angular/core";

import { Gallery, ImageItem, ImageSize, ThumbnailsPosition } from "ng-gallery";
import { Lightbox, LightboxModule } from "ng-gallery/lightbox";

import {
  IImageSlider,
  ILatestForRent,
  ILatestForSale,
} from "../../../../shared/interface/property";

@Component({
  selector: "app-property-image-box-home-section",
  imports: [LightboxModule],
  templateUrl: "./property-image-box-home-section.html",
  styleUrls: ["./property-image-box-home-section.scss"],
})
export class PropertyImageBoxHomeSection {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);

  readonly propertyImageSliderImage = input<IImageSlider[]>();
  readonly propertyData = input<ILatestForRent[] | ILatestForSale[]>();

  openLightBox(url: string) {
    const lightboxRef = this.gallery.ref("lightbox");

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open();
    lightboxRef.load([new ImageItem({ src: url, thumb: url })]);
  }

  open(url: string) {
    const lightboxRef = this.gallery.ref("lightbox");

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open();
    lightboxRef.load([new ImageItem({ src: url, thumb: url })]);
  }
}
