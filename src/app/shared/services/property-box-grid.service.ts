import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PropertyBoxGridService {
  public listView: boolean = false;
  public gridOptions: boolean = true;
  public col_xl_4: boolean = false;
  public col_md_6: boolean = true;
  public col_lg_4: boolean = false;
  public col_6: boolean = false;
  public col_lg_6: boolean = false;
  public col_xl_6: boolean = false;
  public col_xl_12: boolean = false;
  public col_xxl_3: boolean = false;

  gridOpen() {
    this.gridOptions = true;
    this.col_lg_6 = true;
    this.col_md_6 = true;
    this.col_xl_4 = true;
    this.col_lg_4 = false;
    this.col_6 = false;
    this.col_xl_6 = false;
    this.col_xl_12 = false;
    this.col_xxl_3 = false;
    this.listView = false;
  }

  gridOpen2() {
    this.gridOptions = true;
    this.col_lg_6 = false;
    this.col_md_6 = true;
    this.col_xl_4 = false;
    this.col_lg_4 = false;
    this.col_6 = false;
    this.col_xl_6 = false;
    this.col_xl_12 = false;
    this.col_xxl_3 = false;
    this.listView = false;
  }

  listOpen() {
    this.listView = true;
    this.col_xl_12 = true;
    this.col_xl_6 = false;
    this.gridOptions = false;
    this.col_lg_6 = false;
    this.col_md_6 = false;
    this.col_xl_4 = false;
    this.col_lg_4 = false;
    this.col_6 = false;
    this.col_xxl_3 = false;
  }

  list() {
    this.listView = true;
    this.col_xl_6 = true;
    this.col_xl_12 = false;
    this.gridOptions = false;
    this.col_lg_6 = false;
    this.col_md_6 = false;
    this.col_xl_4 = false;
    this.col_lg_4 = false;
    this.col_6 = false;
    this.col_xxl_3 = false;
  }

  grid2() {
    this.col_md_6 = true;
    this.gridOptions = false;
    this.col_lg_6 = false;
    this.col_xl_4 = false;
    this.col_lg_4 = false;
    this.col_6 = false;
    this.col_xl_6 = false;
    this.col_xl_12 = false;
    this.col_xxl_3 = false;
    this.listView = false;
  }

  grid3() {
    this.col_md_6 = true;
    this.col_xl_4 = true;
    this.col_lg_4 = false;
    this.col_6 = false;
    this.col_lg_6 = false;
    this.gridOptions = false;
    this.col_xl_6 = false;
    this.col_xl_12 = false;
    this.col_xxl_3 = false;
    this.listView = false;
  }

  grid4() {
    this.col_xxl_3 = true;
    this.col_md_6 = true;
    this.col_xl_4 = true;
    this.col_6 = false;
    this.col_lg_4 = false;
    this.col_lg_6 = false;
    this.gridOptions = false;
    this.col_xl_6 = false;
    this.col_xl_12 = false;
    this.listView = false;
  }
}
