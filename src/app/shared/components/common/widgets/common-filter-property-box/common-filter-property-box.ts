import { Component, inject, input, output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Store } from "@ngxs/store";
import { Observable } from "rxjs";

import {
  IAreaFilter,
  ILatestForRent,
  IPagination,
  IPriceFilter,
  ITagData,
} from "../../../../../shared/interface/property";
import { PropertyBoxGridService } from "../../../../../shared/services/property-box-grid.service";
import { PropertyService } from "../../../../../shared/services/property.service";
import { GetCategory } from "../../../../../shared/store/actions/category.action";
import { CategoryState } from "../../../../../shared/store/states/category.state";
import { CurrencySymbolPipe } from "../../../../pipe/currency-symbol.pipe";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";
import { PropertyBox } from "../../property-box/property-box";
import { Pagination } from "../pagination/pagination";

@Component({
  selector: "app-common-filter-property-box",
  imports: [FeatherIcons, PropertyBox, Pagination, CurrencySymbolPipe],
  templateUrl: "./common-filter-property-box.html",
  styleUrls: ["./common-filter-property-box.scss"],
})
export class CommonFilterPropertyBox {
  propertyService = inject(PropertyService);
  private propertyBoxGridService = inject(PropertyBoxGridService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(Store);

  readonly type = input<string>();
  readonly filter = input<boolean>();
  readonly map = input<boolean>();
  readonly thumbnail = input<boolean>(false);
  readonly thumbnail_video = input<boolean>(false);
  readonly pagination = input<boolean>(true);
  readonly gridImages = input<boolean>(false);
  readonly filterValue = input<string>();
  readonly sidebarType = input<string>();

  readonly totalProperty = output<number>();
  readonly paginationData = output<IPagination>();
  readonly paramsTagData = output<string[]>();
  readonly categoryData = output<string>();

  public totalItems: number = 0;
  public isOpenFilter: boolean = false;
  public isOpen: boolean = false;
  public listView: boolean = false;
  public active: boolean = false;
  public listViewBox: boolean = false;
  public col_lg_6: boolean = false;
  public col_md_6: boolean = false;
  public col_lg_4: boolean = false;
  public col_xxl_3: boolean = false;
  public col_xl_6: boolean = false;
  public col_6: boolean = false;
  public col_xl_12: boolean = false;
  public col_xl_4: boolean = false;
  public latestForRentData: ILatestForRent[];
  public paginate: IPagination; // Pagination use only
  public pageNo: number = 1;
  public category: string[] = [];
  public status: string[] = [];
  public rooms: string[] = [];
  public beds: string[] = [];
  public bath: string[] = [];
  public agency: string[] = [];
  public minPrice: string;
  public maxPrice: string;
  public minArea: string;
  public maxArea: string;
  public sortBy: string;
  public tags: ITagData[] = [];
  public price: IPriceFilter | null;
  public area: IAreaFilter | null;
  public paramsTag: string[];

  public category$: Observable<ILatestForRent[]> = this.store.select(
    CategoryState.category,
  );

  constructor() {
    this.route.queryParams.subscribe((params) => {
      this.category = params["category"] ? params["category"].split(",") : [];
      this.status = params["status"] ? params["status"].split(",") : [];
      this.rooms = params["room"] ? params["room"].split(",") : [];
      this.beds = params["bed"] ? params["bed"].split(",") : [];
      this.bath = params["bath"] ? params["bath"].split(",") : [];
      this.agency = params["agency"] ? params["agency"].split(",") : [];
      this.minPrice = params["minPrice"] ? params["minPrice"] : [];
      this.maxPrice = params["maxPrice"] ? params["maxPrice"] : [];
      this.minArea = params["minArea"] ? params["minArea"] : [];
      this.maxArea = params["maxArea"] ? params["maxArea"] : [];
      this.pageNo = params["page"] ? params["page"] : this.pageNo;
      this.sortBy = params["sortBy"] ? params["sortBy"] : [];

      this.price = {
        minPrice: Number(this.minPrice),
        maxPrice: Number(this.maxPrice),
      };
      this.area = {
        minArea: Number(this.minArea),
        maxArea: Number(this.maxArea),
      };

      this.paramsTag = [
        ...this.category,
        ...this.status,
        ...this.rooms,
        ...this.beds,
        ...this.bath,
        ...this.agency,
      ];
      this.paramsTagData.emit(this.paramsTag);

      this.store.dispatch(
        new GetCategory(
          this.paramsTag,
          this.price,
          this.area,
          this.category,
          this.sortBy,
        ),
      );

      this.category$.subscribe((res) => {
        this.latestForRentData = res;
        // Pagination
        this.paginate = this.propertyService.getPager(
          this.latestForRentData?.length,
          +this.pageNo,
        );
        this.paginationData.emit(this.paginate);

        this.latestForRentData = this.latestForRentData?.slice(
          this.paginate.startIndex,
          this.paginate.endIndex + 1,
        );
      });
    });
  }

  ngOnInit() {
    const type = this.type();
    if (type == "grid-2") {
      this.propertyBoxGridService.col_md_6 = true;
      this.propertyBoxGridService.col_xl_4 = false;
    }
    if (type == "grid-3") {
      this.propertyBoxGridService.col_xl_4 = true;
      this.propertyBoxGridService.col_md_6 = true;
    }
    if (type == "map") {
      this.propertyBoxGridService.col_md_6 = true;
      this.propertyBoxGridService.col_lg_6 = true;
    }
    if (type == "list") {
      this.propertyBoxGridService.listView = true;
      if (this.sidebarType() == "no_sidebar") {
        this.propertyBoxGridService.col_xl_6 = true;
        this.propertyBoxGridService.col_md_6 = false;
      } else {
        this.propertyBoxGridService.col_xl_12 = true;
        this.propertyBoxGridService.col_md_6 = false;
      }
    }
  }

  public openMenu() {
    this.isOpen = !this.isOpen;
  }

  public openFilter() {
    this.isOpenFilter = !this.isOpenFilter;
  }

  setPage(page: number) {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: "merge",
      skipLocationChange: false,
    });
  }

  removePrice() {
    this.price = null;

    let params = {
      minPrice: null,
      maxPrice: null,
    };

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: "merge",
      skipLocationChange: false,
    });
  }

  removeArea() {
    this.area = null;

    let params = {
      minArea: null,
      maxArea: null,
    };

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: "merge",
      skipLocationChange: false,
    });
  }

  removeTag(tag: string) {
    this.category = this.category.filter((category: string) => category != tag);
    this.status = this.status.filter((status: string) => status != tag);
    this.rooms = this.rooms.filter((room: string) => room != tag);
    this.beds = this.beds.filter((bed: string) => bed != tag);
    this.bath = this.bath.filter((bath: string) => bath != tag);
    this.agency = this.agency.filter((agency: string) => agency != tag);

    let params = {
      category: this.category.length ? this.category.join(",") : null,
      status: this.status.length ? this.status.join(",") : null,
      room: this.rooms.length ? this.rooms.join(",") : null,
      bed: this.beds.length ? this.beds.join(",") : null,
      bath: this.bath.length ? this.bath.join(",") : null,
      agency: this.agency.length ? this.agency.join(",") : null,
    };

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: "merge",
      skipLocationChange: false,
    });
  }

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
    this.col_lg_6 = this.propertyBoxGridService.col_lg_6;
    this.col_md_6 = this.propertyBoxGridService.col_md_6;
    this.col_lg_4 = this.propertyBoxGridService.col_lg_4;
    this.col_xl_4 = this.propertyBoxGridService.col_xl_4;
    this.col_xxl_3 = this.propertyBoxGridService.col_xxl_3;
    this.col_6 = this.propertyBoxGridService.col_6;
    this.col_xl_12 = this.propertyBoxGridService.col_xl_12;
    this.col_xl_6 = this.propertyBoxGridService.col_xl_6;
  }

  ngOnDestroy() {
    this.propertyBoxGridService.listView = false;
    this.propertyBoxGridService.col_lg_6 = false;
    this.propertyBoxGridService.col_md_6 = false;
    this.propertyBoxGridService.col_lg_4 = false;
    this.propertyBoxGridService.col_xxl_3 = false;
    this.propertyBoxGridService.col_6 = false;
    this.propertyBoxGridService.col_xl_12 = false;
    this.propertyBoxGridService.col_xl_4 = false;
    this.propertyBoxGridService.col_xl_6 = false;
  }
}
