import { Component, input } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IDetailsProperty } from "../../../../shared/interface/property";
import { RequestExplorationForm } from "../request-exploration-form/request-exploration-form";

@Component({
  selector: "app-gallery",
  imports: [RequestExplorationForm, CarouselModule],
  templateUrl: "./gallery.html",
  styleUrls: ["./gallery.scss"],
})
export class Gallery {
  readonly galleryImagesData = input<IDetailsProperty[]>();
  readonly requestForm = input<boolean>(false);

  public selectedImage: string;

  public Options = {
    items: 1,
    loop: true,
    nav: false,
    dots: false,
  };

  public thumbnailCarouselOptions = {
    items: 5,
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
