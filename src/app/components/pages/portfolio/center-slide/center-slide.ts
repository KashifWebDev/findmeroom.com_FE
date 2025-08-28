import { Component, inject } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IImg } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-center-slide",
  imports: [CarouselModule],
  templateUrl: "./center-slide.html",
  styleUrls: ["./center-slide.scss"],
})
export class CenterSlide {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/4.png";
  public darkHeaderLogo = "assets/images/logo/9.png";
  public footerLogo = "assets/images/logo/footer-logo.png";

  public parallaxImagesData: IImg[];

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    center: true,
    responsive: {
      0: {
        items: 3,
      },
    },
  };

  ngOnInit() {
    document.documentElement.style.setProperty(
      "--theme-default",
      this.theme_default3,
    );
    document.documentElement.style.setProperty(
      "--theme-default3",
      this.theme_default3,
    );
    document.documentElement.style.setProperty(
      "--theme-default4",
      this.theme_default4,
    );

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.parallaxImagesData = response.parallaxImagesData;
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
