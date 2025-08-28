import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { PropertyBox } from "../../../shared/components/common/property-box/property-box";
import { Breadcrumb } from "../../../shared/components/ui/breadcrumb/breadcrumb";
import { Title } from "../../../shared/components/ui/title/title";
import {
  ILatestForRent,
  ILatestForSale,
} from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";

@Component({
  selector: "app-modules-property",
  templateUrl: "./modules-property.html",
  styleUrls: ["./modules-property.scss"],
  imports: [Title, PropertyBox, Breadcrumb, CommonModule],
})
export class ModulesProperty {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Property";
  public parent = "Modules";
  public child = "Property";

  public desc =
    "Discover New York’s best things to do, restaurants, theatre, nightlife and more";
  public desc2 =
    "Residences can be classified into different type of housing tenure can used for same physical type.";
  public desc3 =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";
  public desc4 =
    "Residences can be classified into different type of housing tenure can used for same physical type.";

  public propertyTitle1 = "image_content";
  public propertyTitle2 = "corporate";
  public propertyTitle3 = "classic";
  public propertyTitle4 = "slider_filter_search";

  public latestForRentData: ILatestForRent[] = [];
  public propertyListingData: ILatestForRent[] = [];
  public latestForRentData2: ILatestForRent[] = [];
  public propertyData: ILatestForSale[] = [];

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  ngOnInit() {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter((item) =>
        item.type.includes(this.propertyTitle1),
      );
      this.propertyListingData = response.latestForRent.filter(
        (item) => item.type == this.propertyTitle2,
      );
      this.latestForRentData2 = response.latestForRent.filter((item) =>
        item.type.includes(this.propertyTitle3),
      );
    });

    this.propertyService.propertyData().subscribe((response) => {
      this.propertyData = response.latestForSale.filter(
        (item) => item.type == this.propertyTitle4,
      );
    });
  }
}
