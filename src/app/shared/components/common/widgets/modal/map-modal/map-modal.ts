import { Component, inject, input } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { FilterBox } from "../../../home-section-slider/filter-box/filter-box";
import { CommonLeafletMap } from "../../common-leaflet-map/common-leaflet-map";

@Component({
  selector: "app-map-modal",
  imports: [FilterBox, GoogleMapsModule, CommonLeafletMap],
  templateUrl: "./map-modal.html",
  styleUrls: ["./map-modal.scss"],
})
export class MapModal {
  private modal = inject(NgbModal);

  readonly data = input<string>();

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 25.276987, lng: 55.296249 },
    zoom: 6,
  };

  modalClose() {
    this.modal.dismissAll();
  }
}
