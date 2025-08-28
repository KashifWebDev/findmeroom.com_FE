import { CommonModule } from "@angular/common";
import { Component, inject, output, input } from "@angular/core";

import { Options } from "@angular-slider/ngx-slider";

import {
  IAgencyParams,
  IAreaFilter,
  IBathParams,
  IBedParams,
  ICategoryParams,
  ILatestForRent,
  IPriceFilter,
  IRoomsParams,
  IStatusParams,
} from "../../../../shared/interface/property";
import { FilterBoxService } from "../../../../shared/services/filter-box.service";
import {
  agency,
  baths,
  beds,
  category,
  location,
  propertyStatus,
  propertyType,
  rooms,
} from "../../../data/advance-filter";
import { FilterBox } from "../home-section-slider/filter-box/filter-box";
import { Category } from "./widgets/category/category";
import { ContactInfo } from "./widgets/contact-info/contact-info";
import { RecentlyAdded } from "./widgets/recently-added/recently-added";

@Component({
  selector: "app-advance-filter-box",
  imports: [CommonModule, FilterBox, Category, ContactInfo, RecentlyAdded],
  templateUrl: "./advance-filter-box.html",
  styleUrls: ["./advance-filter-box.scss"],
})
export class AdvanceFilterBox {
  filterBoxService = inject(FilterBoxService);

  readonly filterData = input<ILatestForRent[]>();

  readonly categoryValue = output<ICategoryParams>();
  readonly propertyStatusData = output<IStatusParams>();
  readonly propertyTypeData = output<ICategoryParams>();
  readonly roomsData = output<IRoomsParams>();
  readonly bedsData = output<IBedParams>();
  readonly bathData = output<IBathParams>();
  readonly agencyData = output<IAgencyParams>();
  readonly priceFilter = output<IPriceFilter>();
  readonly areaFilter = output<IAreaFilter>();

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

  closeFilter() {
    this.filterBoxService.isOpenLeftFilter = false;
  }

  receiveChildData(categoryValue: string) {
    this.categoryValue.emit({ category: categoryValue });
  }

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
