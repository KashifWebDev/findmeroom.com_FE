import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { Gallery, ImageSize, ThumbnailsPosition } from "ng-gallery";
import { Lightbox, LightboxModule } from "ng-gallery/lightbox";
import { NgxMasonryModule, NgxMasonryOptions } from "ngx-masonry";

import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { IGridImages } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";
import { GridTab } from "../widgets/grid-tab/grid-tab";

@Component({
  selector: "app-creative4",
  imports: [
    Breadcrumb,
    GridTab,
    NgxMasonryModule,
    CommonModule,
    LightboxModule,
  ],
  templateUrl: "./creative4.html",
  styleUrls: ["./creative4.scss"],
})
export class Creative4 {
  private propertyService = inject(PropertyService);
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Portfolio";
  public parent = "Home";
  public child = "Portfolio";

  public gridImagesData: IGridImages[];
  public imagesData: IGridImages[];

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  public masonryOptions: NgxMasonryOptions = {};

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
      this.imagesData = response.creativePage3Data.filter(
        (data: { fileType: string }) => data.fileType == "image",
      );

      this.gridImagesData = response.creativePage3Data.filter(
        (data: { fileType: string }) => data.fileType == "image",
      );
    });

    const lightboxRef = this.gallery.ref("lightbox");

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }

  receiveChildData(data: IGridImages[]) {
    this.imagesData = data;
  }
}
