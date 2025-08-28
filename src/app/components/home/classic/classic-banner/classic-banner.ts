import { Component, inject } from "@angular/core";

import { Banner } from "../../../../shared/components/common/banner/banner";
import { IBanner } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-classic-banner",
  imports: [Banner],
  templateUrl: "./classic-banner.html",
  styleUrls: ["./classic-banner.scss"],
})
export class ClassicBanner {
  private propertyService = inject(PropertyService);

  public title = "classic";
  public bannerData: IBanner[] = [];

  ngOnInit() {
    this.propertyService.bannerData().subscribe((response) => {
      this.bannerData = response.banner.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
