import { Component, inject, input } from "@angular/core";

import { FeaturedProperty } from "../../../../shared/components/common/featured-property/featured-property";
import { Title } from "../../../../shared/components/ui/title/title";
import { IFeaturedProperty } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-corporate-featured-property",
  imports: [Title, FeaturedProperty],
  templateUrl: "./corporate-featured-property.html",
  styleUrls: ["./corporate-featured-property.scss"],
})
export class CorporateFeaturedProperty {
  propertyService = inject(PropertyService);

  readonly svgClass = input<boolean>();
  readonly tagClass = input<string>();

  public desc =
    "Residences can be classified into different type of housing tenure can used for same physical type";
  public title = "corporate";

  public featuredProperty: IFeaturedProperty[] = [];

  ngOnInit() {
    this.propertyService.featuredPropertyData().subscribe((response) => {
      this.featuredProperty = response.featuredProperty.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
