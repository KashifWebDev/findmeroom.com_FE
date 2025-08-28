import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Gallery, ImageSize, ThumbnailsPosition } from "ng-gallery";
import { Lightbox } from "ng-gallery/lightbox";

import { IGridImages } from "../../../../../shared/interface/property";

@Component({
  selector: "app-common-grid-images",
  imports: [RouterModule, CommonModule],
  templateUrl: "./common-grid-images.html",
  styleUrls: ["./common-grid-images.scss"],
})
export class CommonGridImages {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);

  readonly imagesData = input<IGridImages>();
  readonly gridTitle = input<boolean>(false);
  readonly type = input<string>("");
  readonly index = input<number>();

  ngOnInit() {
    const lightboxRef = this.gallery.ref("lightbox");

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }
}
