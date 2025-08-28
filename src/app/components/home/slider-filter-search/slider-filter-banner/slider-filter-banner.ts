import { Component, inject, input } from "@angular/core";

import { Banner } from "../../../../shared/components/common/banner/banner";
import { Title } from "../../../../shared/components/ui/title/title";
import { IBanner } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-slider-filter-banner",
  imports: [Title, Banner],
  templateUrl: "./slider-filter-banner.html",
  styleUrls: ["./slider-filter-banner.scss"],
})
export class SliderFilterBanner {
  private propertyService = inject(PropertyService);

  readonly tagClass = input<string>("");
  readonly title = input<string>();
  public bannerData: IBanner[] = [];

  ngOnInit() {
    this.propertyService.bannerData().subscribe((response) => {
      this.bannerData = response.banner.filter((item) =>
        item.type.includes(this.title()!),
      );
    });
  }
}
