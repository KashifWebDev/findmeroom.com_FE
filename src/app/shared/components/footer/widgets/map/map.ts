import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-map",
  imports: [CommonModule],
  templateUrl: "./map.html",
  styleUrls: ["./map.scss"],
})
export class Map {
  public isMapData: boolean = false;

  openMap() {
    this.isMapData = !this.isMapData;
  }
}
