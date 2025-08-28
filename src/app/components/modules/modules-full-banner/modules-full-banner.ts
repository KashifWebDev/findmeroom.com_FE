import { Component, inject } from "@angular/core";

import { Banner } from "../../../shared/components/common/banner/banner";
import { Brand } from "../../../shared/components/common/brand/brand";
import { Title } from "../../../shared/components/ui/title/title";
import { IBanner, IBrand } from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";

@Component({
  selector: "app-modules-full-banner",
  templateUrl: "./modules-full-banner.html",
  styleUrls: ["./modules-full-banner.scss"],
  imports: [Banner, Title, Brand],
})
export class ModulesFullBanner {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";

  public bannerTitle1 = "enterprise";
  public bannerTitle2 = "image_content";
  public bannerTitle3 = "corporate";
  public brandTitle1 = "enterprise";

  public brandData1: IBrand[] = [];
  public bannerData1: IBanner[] = [];
  public bannerData2: IBanner[] = [];
  public bannerData3: IBanner[] = [];

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  ngOnInit() {
    this.propertyService.bannerData().subscribe((response) => {
      this.bannerData1 = response.banner.filter(
        (item) => item.type == this.bannerTitle1,
      );
      this.bannerData2 = response.banner.filter((item) =>
        item.type.includes(this.bannerTitle2),
      );
      this.bannerData3 = response.banner.filter(
        (item) => item.type == this.bannerTitle3,
      );
    });

    this.propertyService.brandData().subscribe((response) => {
      this.brandData1 = response.brand.filter(
        (item) => item.type == this.brandTitle1,
      );
    });
  }
}
