import { Component, inject, input } from "@angular/core";

import { Banner } from "../../../../shared/components/common/banner/banner";
import { IBanner } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-corporate-banner",
  imports: [Banner],
  templateUrl: "./corporate-banner.html",
  styleUrls: ["./corporate-banner.scss"],
})
export class CorporateBanner {
  private propertyService = inject(PropertyService);

  readonly tagClass = input<string>();
  readonly svgClass = input<boolean>();

  public title = "corporate";
  public bannerData: IBanner[] = [];

  ngOnInit() {
    this.propertyService.bannerData().subscribe((response) => {
      this.bannerData = response.banner.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
