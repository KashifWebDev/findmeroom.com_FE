import { CommonModule } from "@angular/common";
import { Component, input, output } from "@angular/core";

import { FeatherIcons } from "../../../../../shared/components/ui/feather-icons/feather-icons";
import { IGridImages } from "../../../../../shared/interface/property";

@Component({
  selector: "app-grid-tab",
  imports: [CommonModule, FeatherIcons],
  templateUrl: "./grid-tab.html",
  styleUrls: ["./grid-tab.scss"],
})
export class GridTab {
  readonly gridImagesData = input<IGridImages[]>();
  readonly imagesData = output<IGridImages[]>();

  public images: IGridImages[];
  public activeTab: string = "all";

  ngOnChanges() {
    this.images = this.gridImagesData()!.filter((data) => {
      return (data.fileType = "image");
    });
  }

  getTab(value: string) {
    this.activeTab = value;
    this.images = this.gridImagesData()!.filter((data) => {
      return data.type == value;
    });
    if (value == "all") {
      this.images = this.gridImagesData()!;
    }
    this.imagesData.emit(this.images);
  }
}
