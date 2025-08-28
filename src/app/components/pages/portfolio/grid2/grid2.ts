import { Component, inject, input } from "@angular/core";

import { LightboxModule } from "ng-gallery/lightbox";

import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { IGridImages } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";
import { CommonGridImages } from "../widgets/common-grid-images/common-grid-images";
import { GridTab } from "../widgets/grid-tab/grid-tab";

@Component({
  selector: "app-grid2",
  templateUrl: "./grid2.html",
  styleUrls: ["./grid2.scss"],
  imports: [Breadcrumb, GridTab, CommonGridImages, LightboxModule],
})
export class Grid2 {
  private propertyService = inject(PropertyService);

  readonly bgImage = input<string>("assets/images/inner-background.jpg");
  readonly title = input("Portfolio");
  readonly parent = input("Home");
  readonly child = input("Portfolio");
  readonly type = input<string>();

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public activeTab: string = "all";

  public gridImagesData: IGridImages[];
  public imagesData: IGridImages[];

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

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
      this.imagesData = response.gridImages.filter(
        (data: { fileType: string }) => data.fileType == "image",
      );

      this.gridImagesData = response.gridImages.filter(
        (data: { fileType: string }) => data.fileType == "image",
      );
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
