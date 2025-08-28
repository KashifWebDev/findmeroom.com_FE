import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { IAgencyAgent } from "../../../../../shared/interface/property";
import { PropertyBoxGridService } from "../../../../../shared/services/property-box-grid.service";
import { AgencyAgents } from "../agency-agents/agency-agents";

@Component({
  selector: "app-common-agency",
  imports: [AgencyAgents, CommonModule],
  templateUrl: "./common-agency.html",
  styleUrls: ["./common-agency.scss"],
})
export class CommonAgency {
  private propertyBoxGridService = inject(PropertyBoxGridService);

  readonly agencyData = input<IAgencyAgent[]>();
  readonly type = input<string>();
  readonly totalData = input<number>();

  public isOpenFilter: boolean = false;
  public isOpen: boolean = false;
  public listView: boolean = false;
  public active: boolean = false;
  public listViewBox: boolean = false;
  public col_lg_6: boolean = false;
  public col_md_6: boolean = false;
  public col_lg_4: boolean = false;
  public col_xxl_3: boolean = false;
  public col_6: boolean = false;
  public col_xl_6: boolean = false;
  public col_xl_4: boolean;

  ngOnInit() {
    const type = this.type();
    if (type == "grid-2") {
      this.propertyBoxGridService.col_lg_6 = true;
      this.propertyBoxGridService.col_md_6 = true;
    }
    if (type == "grid-3") {
      this.propertyBoxGridService.col_md_6 = true;
      this.propertyBoxGridService.col_xl_4 = true;
      this.propertyBoxGridService.col_lg_4 = false;
      this.propertyBoxGridService.col_6 = false;
      this.propertyBoxGridService.col_lg_6 = false;
    }
    if (type == "map") {
      this.propertyBoxGridService.col_md_6 = true;
      this.propertyBoxGridService.col_lg_6 = true;
    }
    if (type == "list") {
      this.propertyBoxGridService.listView = true;
      this.propertyBoxGridService.col_lg_6 = true;
      this.propertyBoxGridService.col_xl_6 = true;
      this.propertyBoxGridService.col_md_6 = false;
    }
  }

  ngOnDestroy() {
    this.propertyBoxGridService.listView = false;
    this.propertyBoxGridService.col_lg_6 = false;
    this.propertyBoxGridService.col_md_6 = false;
    this.propertyBoxGridService.col_lg_4 = false;
    this.propertyBoxGridService.col_xxl_3 = false;
    this.propertyBoxGridService.col_6 = false;
    this.propertyBoxGridService.col_xl_6 = false;
  }

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
    this.col_lg_6 = this.propertyBoxGridService.col_lg_6;
    this.col_md_6 = this.propertyBoxGridService.col_md_6;
    this.col_lg_4 = this.propertyBoxGridService.col_lg_4;
    this.col_xxl_3 = this.propertyBoxGridService.col_xxl_3;
    this.col_6 = this.propertyBoxGridService.col_6;
    this.col_xl_6 = this.propertyBoxGridService.col_xl_6;
    this.col_xl_4 = this.propertyBoxGridService.col_xl_4;
  }
}
