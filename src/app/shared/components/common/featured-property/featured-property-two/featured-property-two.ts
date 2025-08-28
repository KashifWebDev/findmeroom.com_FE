import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Gallery, ImageItem, ImageSize, ThumbnailsPosition } from "ng-gallery";
import { Lightbox, LightboxModule } from "ng-gallery/lightbox";
import { CarouselModule } from "ngx-owl-carousel-o";

import { IFeaturedProperty } from "../../../../../shared/interface/property";
import { PropertyService } from "../../../../../shared/services/property.service";
import { CurrencySymbolPipe } from "../../../../pipe/currency-symbol.pipe";

@Component({
  selector: "app-featured-property-two",
  imports: [
    CarouselModule,
    CommonModule,
    RouterModule,
    CurrencySymbolPipe,
    LightboxModule,
  ],
  templateUrl: "./featured-property-two.html",
  styleUrls: ["./featured-property-two.scss"],
})
export class FeaturedPropertyTwo {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);
  propertyService = inject(PropertyService);

  readonly featuredProperty = input<IFeaturedProperty[]>();
  readonly tagClass = input<string>();

  public Options = {
    loop: true,
    mouseDrag: false,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  openLightBox(url: string) {
    const lightboxRef = this.gallery.ref("lightbox");

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open();
    lightboxRef.load([new ImageItem({ src: url, thumb: url })]);
  }
}
