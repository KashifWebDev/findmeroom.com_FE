import { Component, output, input } from "@angular/core";

import { Options } from "@angular-slider/ngx-slider";
import { CarouselModule } from "ngx-owl-carousel-o";

import { AdvanceFilterContact } from "./widgets/advance-filter-contact/advance-filter-contact";
import { AdvanceFilterMortgage } from "./widgets/advance-filter-mortgage/advance-filter-mortgage";
import { AdvanceFilterRequestExploration } from "./widgets/advance-filter-request-exploration/advance-filter-request-exploration";
import {
  IAgencyParams,
  IAreaFilter,
  IBathParams,
  IBedParams,
  ICategoryParams,
  IImg,
  IPriceFilter,
  IRoomsParams,
  IStatusParams,
} from "../../../../shared/interface/property";
import { RecentlyAdded } from "../advance-filter-box/widgets/recently-added/recently-added";
import { FilterBox } from "../home-section-slider/filter-box/filter-box";

@Component({
  selector: "app-advance-filter",
  imports: [
    AdvanceFilterContact,
    AdvanceFilterRequestExploration,
    FilterBox,
    CarouselModule,
    RecentlyAdded,
    AdvanceFilterMortgage,
  ],
  templateUrl: "./advance-filter.html",
  styleUrls: ["./advance-filter.scss"],
})
export class AdvanceFilter {
  readonly propertyFilterSliderData = input<IImg[]>();
  readonly contact = input<boolean>(true);
  readonly featured = input<boolean>(true);
  readonly mortgage = input<boolean>(true);
  readonly filter = input<boolean>(true);

  readonly categoryValue = output<ICategoryParams>();
  readonly propertyStatusData = output<IStatusParams>();
  readonly propertyTypeData = output<ICategoryParams>();
  readonly roomsData = output<IRoomsParams>();
  readonly bedsData = output<IBedParams>();
  readonly bathData = output<IBathParams>();
  readonly agencyData = output<IAgencyParams>();
  readonly priceFilter = output<IPriceFilter>();
  readonly areaFilter = output<IAreaFilter>();

  public totalAmount: number;
  public totalInterest: number;
  public instalment: number;

  options: Options = {
    floor: 0,
    ceil: 500,
  };

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
  };

  getStatus(status: IStatusParams) {
    this.propertyStatusData.emit(status);
  }

  getType(type: ICategoryParams) {
    this.propertyTypeData.emit(type);
  }

  getRooms(room: IRoomsParams) {
    this.roomsData.emit(room);
  }

  getBeds(bed: IBedParams) {
    this.bedsData.emit(bed);
  }

  getBath(bath: IBathParams) {
    this.bathData.emit(bath);
  }

  getAgency(agency: IAgencyParams) {
    this.agencyData.emit(agency);
  }

  priceChange(event: IPriceFilter) {
    this.priceFilter.emit(event);
  }

  areaChange(event: IAreaFilter) {
    this.areaFilter.emit(event);
  }
}
