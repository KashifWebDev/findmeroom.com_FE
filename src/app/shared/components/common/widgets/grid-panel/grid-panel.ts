import { CommonModule } from "@angular/common";
import { Component, inject, output, input } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { IPagination } from "../../../../../shared/interface/property";
import { FilterBoxService } from "../../../../../shared/services/filter-box.service";
import { PropertyBoxGridService } from "../../../../../shared/services/property-box-grid.service";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";
import { MapModal } from "../modal/map-modal/map-modal";

@Component({
  selector: "app-grid-panel",
  imports: [CommonModule, FeatherIcons],
  templateUrl: "./grid-panel.html",
  styleUrls: ["./grid-panel.scss"],
})
export class GridPanel {
  private propertyBoxGridService = inject(PropertyBoxGridService);
  private filterBoxService = inject(FilterBoxService);
  private modal = inject(NgbModal);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  readonly filter = input<boolean>();
  readonly mapButton = input<boolean>(false);
  readonly mapType = input<string>();
  readonly viewMap = input<boolean>(false);
  readonly grid = input<boolean>(true);
  readonly tab = input<boolean>(false);
  readonly gridOption = input<boolean>(true);
  readonly totalData = input<number>(35);
  // readonly paginationData = input<IPagination>();
  readonly paginationData = input<IPagination>({
    totalItems: 0,
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
    startPage: 0,
    endPage: 0,
    startIndex: 0,
    endIndex: 0,
    pages: [],
  });

  readonly agency = input<boolean>(false);
  readonly gridOptions = input<boolean>(false);
  readonly sidebarType = input<string>();
  readonly isList = input<boolean>(false);

  readonly tabValue = output<string>();
  readonly filterValue = output<string>();

  public activeGrid: string;
  public active = 1;
  public openTab: string = "";
  public getSortParams: string;
  public isOpenFilter: boolean = false;
  public isOpenLeftFilter: boolean = false;
  public isOpen: boolean = false;
  public listView: boolean = false;
  public listViewBox: boolean = false;
  public col_lg_6: boolean = false;
  public col_md_6: boolean = false;
  public col_lg_4: boolean = false;
  public col_xxl_3: boolean = false;
  public col_6: boolean = false;
  public col_xl_12: boolean = false;
  public col_md_12: boolean = false;

  public containers = [];

  constructor() {
    this.route.queryParams.subscribe((params) => {
      this.getSortParams = params["sortBy"] ? params["sortBy"] : "";
    });
  }

  ngOnInit() {
    this.tabValue.emit("");
    if (this.isList()) {
      this.activeGrid = "list";
    } else {
      this.activeGrid = "grid";
    }
  }

  gridOpens() {
    this.activeGrid = "grid";
    this.listView = false;
    if (window.location.pathname.includes("/listing/grid-view/2-grid")) {
      this.propertyBoxGridService.grid2();
    } else if (window.location.pathname.includes("/listing/grid-view/3-grid")) {
      this.propertyBoxGridService.grid3();
    } else if (this.agency()) {
      this.propertyBoxGridService.grid3();
    } else {
      this.propertyBoxGridService.grid2();
    }
  }

  listOpens() {
    this.activeGrid = "list";
    this.listView = true;
    if (this.sidebarType() == "no_sidebar") {
      this.propertyBoxGridService.list();
    } else if (this.agency()) {
      this.propertyBoxGridService.list();
    } else {
      this.propertyBoxGridService.listOpen();
    }
  }

  grid2s() {
    this.listView = false;
    this.propertyBoxGridService.grid2();
  }

  grid3s() {
    this.listView = false;
    this.propertyBoxGridService.grid3();
  }
  grid4s() {
    this.listView = false;
    this.propertyBoxGridService.grid4();
  }

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
    this.col_lg_6 = this.propertyBoxGridService.col_lg_6;
    this.col_md_6 = this.propertyBoxGridService.col_md_6;
    this.col_lg_4 = this.propertyBoxGridService.col_lg_4;
    this.col_xxl_3 = this.propertyBoxGridService.col_xxl_3;
    this.col_6 = this.propertyBoxGridService.col_6;
    this.col_xl_12 = this.propertyBoxGridService.col_xl_12;
  }

  openModal(value: boolean) {
    if (value == false) {
      const modalRef = this.modal.open(MapModal, { size: "xl" });
      modalRef.componentInstance.data = this.mapType();
    }
    if ((value = true)) {
      this.filterBoxService.viewMap = !this.filterBoxService.viewMap;
    }
  }

  public openMenu() {
    this.isOpen = !this.isOpen;
  }

  public openFilter() {
    this.filterBoxService.isOpenFilter = !this.filterBoxService.isOpenFilter;
  }

  public openLeftFilter() {
    this.filterBoxService.isOpenLeftFilter = true;
  }

  public tabbed(val: string) {
    this.tabValue.emit(val);
    this.openTab = val;
  }

  public sortFilter(value: Params) {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sortBy: value["target"].value },
      queryParamsHandling: "merge", // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
    this.filterValue.emit(value["target"].value);
  }
}
