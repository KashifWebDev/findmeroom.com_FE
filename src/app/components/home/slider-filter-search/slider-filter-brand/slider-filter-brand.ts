import { Component, inject } from "@angular/core";

import { Brand } from "../../../../shared/components/common/brand/brand";
import { IBrand } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-slider-filter-brand",
  imports: [Brand],
  templateUrl: "./slider-filter-brand.html",
  styleUrls: ["./slider-filter-brand.scss"],
})
export class SliderFilterBrand {
  private propertyService = inject(PropertyService);

  public title = "slider_filter_search";

  public brandData: IBrand[] = [];

  ngOnInit() {
    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter((item) => item.type == this.title);
    });
  }
}
