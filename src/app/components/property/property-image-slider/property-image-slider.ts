import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Store } from "@ngxs/store";
import { Observable } from "rxjs";

import { PropertyImageSliderHomeSection } from "./property-image-slider-home-section/property-image-slider-home-section";
import { AdvanceFilter } from "../../../shared/components/common/advance-filter/advance-filter";
import {
  IDetailsData,
  ILatestForRent,
  IPropertyDetailsData,
} from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";
import { GetPropertyDetails } from "../../../shared/store/actions/property-detail.action";
import { PropertyState } from "../../../shared/store/states/property-detail.state";
import { HomeDetails } from "../widgets/home-details/home-details";
import { Property } from "../widgets/property/property";
import { RelatedProperty } from "../widgets/related-property/related-property";

@Component({
  selector: "app-property-image-slider",
  templateUrl: "./property-image-slider.html",
  styleUrls: ["./property-image-slider.scss"],
  imports: [
    HomeDetails,
    Property,
    RelatedProperty,
    AdvanceFilter,
    PropertyImageSliderHomeSection,
  ],
})
export class PropertyImageSlider {
  private propertyService = inject(PropertyService);
  private store = inject(Store);
  private route = inject(ActivatedRoute);

  public themeLogo = "assets/images/logo/4.png";
  public darkHeaderLogo = "assets/images/logo/9.png";
  public footerLogo = "assets/images/logo/footer-logo.png";

  public propertyDetailsData: IDetailsData[];
  public propertyData: IPropertyDetailsData;
  public propertyId: number;
  public propertyDetails: ILatestForRent;

  public dataArray = [
    "about",
    "feature",
    "gallery",
    "video",
    "floor_plan",
    "location",
  ];

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  public property$: Observable<ILatestForRent[]> = this.store.select(
    PropertyState.property,
  );

  constructor() {
    this.route.queryParams.subscribe((params) => {
      this.propertyId = params["id"];
    });

    this.store.dispatch(new GetPropertyDetails(this.propertyId));

    this.property$.subscribe((res) => {
      this.propertyDetails = res[0];
    });
  }

  ngOnInit() {
    document.documentElement.style.setProperty(
      "--theme-default",
      this.theme_default3,
    );
    document.documentElement.style.setProperty(
      "--theme-default3",
      this.theme_default3,
    );
    document.documentElement.style.setProperty(
      "--theme-default4",
      this.theme_default4,
    );

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.propertyData = response;

      if (Array.isArray(this.dataArray)) {
        if (Array.isArray(response.data)) {
          this.propertyDetailsData = response.data.filter(
            (tabData: { value: string }) =>
              this.dataArray?.includes(tabData.value),
          );
        }
      }
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
