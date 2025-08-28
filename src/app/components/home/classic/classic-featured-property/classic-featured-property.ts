import { Component, inject } from "@angular/core";

import { FeaturedProperty } from "../../../../shared/components/common/featured-property/featured-property";
import { IFeaturedProperty } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-classic-featured-property",
  imports: [FeaturedProperty],
  templateUrl: "./classic-featured-property.html",
  styleUrls: ["./classic-featured-property.scss"],
})
export class ClassicFeaturedProperty {
  propertyService = inject(PropertyService);

  public title = "classic";
  public featuredProperty: IFeaturedProperty[] = [];

  ngOnInit() {
    this.propertyService.featuredPropertyData().subscribe((response) => {
      this.featuredProperty = response.featuredProperty.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
