import { Component, inject } from "@angular/core";

import { Gallery, ImageSize, ThumbnailsPosition } from "ng-gallery";
import { Lightbox, LightboxModule } from "ng-gallery/lightbox";

import { Breadcrumb } from "../../../shared/components/ui/breadcrumb/breadcrumb";
import {
  ModuleImageRatioData,
  modulesImageRatioImagesData,
} from "../../../shared/data/modules";

@Component({
  selector: "app-modules-image-ratio",
  templateUrl: "./modules-image-ratio.html",
  styleUrls: ["./modules-image-ratio.scss"],
  imports: [Breadcrumb, LightboxModule],
})
export class ModulesImageRatio {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Image Ratio";
  public parent = "Modules";
  public child = "Image Ratio";

  public ModuleImageRatioData = ModuleImageRatioData;
  public modulesImageRatioImagesData = modulesImageRatioImagesData;

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  ngOnInit() {
    document.documentElement.style.setProperty("--theme-default", "#6432b8");
    document.documentElement.style.setProperty("--theme-default2", "#9516d7");

    const lightboxRef = this.gallery.ref("lightbox");

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default2");
  }
}
