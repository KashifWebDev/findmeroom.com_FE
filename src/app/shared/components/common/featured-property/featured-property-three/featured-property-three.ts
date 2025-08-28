import { Component, inject, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Gallery, ImageItem, ImageSize, ThumbnailsPosition } from "ng-gallery";
import { Lightbox, LightboxModule } from "ng-gallery/lightbox";
import { CarouselModule } from "ngx-owl-carousel-o";

import {
  ICurrency,
  IFeaturedProperty,
} from "../../../../../shared/interface/property";
import { PropertyService } from "../../../../../shared/services/property.service";
import { CurrencySymbolPipe } from "../../../../pipe/currency-symbol.pipe";

@Component({
  selector: "app-featured-property-three",
  imports: [CarouselModule, RouterModule, CurrencySymbolPipe, LightboxModule],
  templateUrl: "./featured-property-three.html",
  styleUrls: ["./featured-property-three.scss"],
})
export class FeaturedPropertyThree {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);
  propertyService = inject(PropertyService);

  readonly featuredProperty = input<IFeaturedProperty[]>();
  readonly currency = input<ICurrency>();

  public Options = {
    loop: true,
    mouseDrag: false,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-up'></i>",
      "<i class='fa fa-arrow-down'></i>",
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
