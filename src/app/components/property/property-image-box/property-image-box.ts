import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Store } from "@ngxs/store";
import { Observable } from "rxjs";

import { PropertyImageBoxHomeSection } from "./property-image-box-home-section/property-image-box-home-section";
import { AdvanceFilter } from "../../../shared/components/common/advance-filter/advance-filter";
import {
  IDetailsData,
  ILatestForRent,
  ILatestForSale,
  IPropertyDetailsData,
} from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";
import { GetImages } from "../../../shared/store/actions/property-images.action";
import { ImageState } from "../../../shared/store/states/property-images.state";
import { HomeDetails } from "../widgets/home-details/home-details";
import { Property } from "../widgets/property/property";
import { RelatedProperty } from "../widgets/related-property/related-property";

@Component({
  selector: "app-property-image-box",
  templateUrl: "./property-image-box.html",
  styleUrls: ["./property-image-box.scss"],
  imports: [
    HomeDetails,
    Property,
    RelatedProperty,
    AdvanceFilter,
    PropertyImageBoxHomeSection,
  ],
})
export class PropertyImageBox {
  private propertyService = inject(PropertyService);
  private route = inject(ActivatedRoute);
  private store = inject(Store);

  public themeLogo = "assets/images/logo/4.png";
  public darkHeaderLogo = "assets/images/logo/9.png";
  public footerLogo = "assets/images/logo/footer-logo.png";

  public propertyDetailsData: IDetailsData[];
  public propertyData: IPropertyDetailsData;
  public getId: string;
  public imageID: ILatestForRent[] | ILatestForSale[];

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

  public image$: Observable<ILatestForSale[] | ILatestForRent[]> =
    this.store.select(ImageState.images);

  constructor() {
    this.route.queryParams.subscribe((params) => {
      this.getId = params["id"];
    });

    this.store.dispatch(new GetImages(this.getId));

    this.image$.subscribe((res) => {
      if (res) {
        this.imageID = res;
      }
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
