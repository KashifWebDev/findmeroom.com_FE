import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { FeaturedProperty } from "../../../../shared/components/common/featured-property/featured-property";
import { Title } from "../../../../shared/components/ui/title/title";
import { IFeaturedProperty } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-slider-filter-featured-property",
  imports: [CommonModule, Title, FeaturedProperty],
  templateUrl: "./slider-filter-featured-property.html",
  styleUrls: ["./slider-filter-featured-property.scss"],
})
export class SliderFilterFeaturedProperty {
  propertyService = inject(PropertyService);

  readonly tagClass = input<string>("");
  readonly title = input<string>();
  readonly sectionClass = input<string>();

  public tag = "Our";
  public heading = "Featured Property";

  public featuredProperty: IFeaturedProperty[] = [];

  ngOnInit() {
    this.propertyService.featuredPropertyData().subscribe((response) => {
      this.featuredProperty = response.featuredProperty.filter((item) =>
        item.type.includes(this.title()!),
      );
    });
  }
}
