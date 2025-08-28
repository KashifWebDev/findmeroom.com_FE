import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IProvidedServices } from "../../../../../shared/interface/property";

@Component({
  selector: "app-provided-service-three",
  imports: [RouterModule, CarouselModule],
  templateUrl: "./provided-service-three.html",
  styleUrls: ["./provided-service-three.scss"],
})
export class ProvidedServiceThree {
  readonly providedServicesData = input<IProvidedServices[]>();

  public Options = {
    loop: true,
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
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  };
}
