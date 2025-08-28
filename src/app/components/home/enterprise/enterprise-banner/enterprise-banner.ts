import { Component, inject } from "@angular/core";

import { Banner } from "../../../../shared/components/common/banner/banner";
import { IBanner } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-enterprise-banner",
  imports: [Banner],
  templateUrl: "./enterprise-banner.html",
  styleUrls: ["./enterprise-banner.scss"],
})
export class EnterpriseBanner {
  private propertyService = inject(PropertyService);

  public title = "enterprise";

  public bannerData: IBanner[] = [];

  ngOnInit() {
    this.propertyService.bannerData().subscribe((response) => {
      this.bannerData = response.banner.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
