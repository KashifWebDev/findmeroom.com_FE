import { Component, inject, input } from "@angular/core";

import { Gallery, ImageSize, ThumbnailsPosition } from "ng-gallery";
import { Lightbox } from "ng-gallery/lightbox";

import { IGridImages } from "../../../../../shared/interface/property";

@Component({
  selector: "app-portfolio-details-images",
  imports: [],
  templateUrl: "./portfolio-details-images.html",
  styleUrls: ["./portfolio-details-images.scss"],
})
export class PortfolioDetailsImages {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);

  readonly imagesData = input<IGridImages>();
  readonly index = input<number>();

  ngOnInit() {
    const lightboxRef = this.gallery.ref("lightbox");

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }
}
