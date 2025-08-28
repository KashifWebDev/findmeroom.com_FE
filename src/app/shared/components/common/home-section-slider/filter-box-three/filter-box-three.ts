import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgxSliderModule, Options } from "@angular-slider/ngx-slider";

import { PropertyService } from "../../../../../shared/services/property.service";
import {
  agency,
  baths,
  beds,
  category,
  propertyStatus,
  propertyType,
  rooms,
  location,
} from "../../../../data/advance-filter";
import { CurrencySymbolPipe } from "../../../../pipe/currency-symbol.pipe";
import { useIsBrowser } from "../../../../utils/platform";

@Component({
  selector: "app-filter-box-three",
  imports: [NgxSliderModule, RouterModule, CurrencySymbolPipe],
  templateUrl: "./filter-box-three.html",
  styleUrls: ["./filter-box-three.scss"],
})
export class FilterBoxThree {
  isBrowser = useIsBrowser();
  propertyService = inject(PropertyService);

  public propertyStatus = propertyStatus;
  public propertyType = propertyType;
  public location = location;
  public rooms = rooms;
  public beds = beds;
  public baths = baths;
  public agency = agency;
  public category = category;

  public priceMinValue: number = 75;
  public priceMaxValue: number = 300;
  public areaMinValue: number = 75;
  public areaMaxValue: number = 300;

  public options: Options = {
    floor: 0,
    ceil: 500,
  };
}
