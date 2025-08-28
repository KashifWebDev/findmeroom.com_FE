import { Component } from "@angular/core";

import { LeafletModule } from "@bluehalo/ngx-leaflet";
import * as L from "leaflet";

interface MarkerData {
  name: string;
  position: [number, number];
  map_image_url: string;
  price: string;
  label: string;
  bed: string;
  bath: string;
  sqft: string;
  draggable: boolean;
}

@Component({
  selector: "app-common-leaflet-map",
  imports: [LeafletModule],
  templateUrl: "./common-leaflet-map.html",
  styleUrls: ["./common-leaflet-map.scss"],
})
export class CommonLeafletMap {
  public map: L.Map;
  public markers: L.Marker[] = [];
  public customIcon: L.DivIcon;
  public options: L.MapOptions = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "...",
      }),
    ],
    zoom: 12,
    center: L.latLng(20.5937, 78.9629),
  };

  initMarkers() {
    // Static Data For Map Markers
    const initialMarkers: MarkerData[] = [
      {
        name: "Sea Breezes",
        position: [25.206426, 55.346465],
        map_image_url: "assets/images/property/15.jpg",
        price: "$1200",
        label: "for sale",
        bed: "4",
        bath: "4",
        sqft: "5000",
        draggable: true,
      },
      {
        name: "Orchard House",
        position: [25.222578, 55.319011],
        map_image_url: "assets/images/6.jpg",
        price: "$1200",
        label: "for rent",
        bed: "8",
        bath: "6",
        sqft: "5800",
        draggable: true,
      },
      {
        name: "Neverland",
        position: [25.209843, 55.293616],
        map_image_url: "assets/images/property/14.jpg",
        price: "$1200",
        label: "for sale",
        bed: "4",
        bath: "4",
        sqft: "5000",
        draggable: true,
      },
      {
        name: "Home in Merrick Way",
        position: [25.229721, 55.328229],
        map_image_url: "assets/images/feature/9.jpg",
        price: "$1200",
        label: "for rent",
        bed: "5",
        bath: "3",
        sqft: "6000",
        draggable: true,
      },
    ];

    initialMarkers.forEach((data, index) => {
      this.customIcon = L.divIcon({
        className: "custom-div-icon",
        html: "<div class='marker-pin'></div><img src='assets/images/leaflet/marker-icon.png'>",
        iconSize: [30, 42],
        iconAnchor: [15, 42],
      });
      const marker = this.generateMarker(data, index);
      marker
        .addTo(this.map)
        .bindPopup(
          `<div class="infoBox"><div class="marker-detail"><img src="${data.map_image_url}" alt="Image"><div class="label label-shadow">${data.label}</div><div class="detail-part"><h6>${data.name}</h6><ul><li>Bed : ${data.bed}</li><li>Baths : ${data.bath}</li><li>Sq Ft : ${data.sqft}</li></ul><span>${data.price}</span><a href="javascript:void(0)" rel="noopener noreferrer"></a></div></div></div> `,
        );
      this.map.panTo(data.position);
      this.markers.push(marker);
    });
  }

  generateMarker(data: MarkerData, index: number): L.Marker {
    return L.marker(data.position, {
      draggable: data.draggable,
      icon: this.customIcon,
    })
      .on("click", (event: L.LeafletMouseEvent) =>
        this.markerClicked(event, index),
      )
      .on("dragend", (event: L.DragEndEvent) =>
        this.markerDragEnd(event, index),
      );
  }

  onMapReady($event: L.Map) {
    this.map = $event;
    this.initMarkers();
  }

  mapClicked(_$event: L.LeafletMouseEvent) {}

  markerClicked(_$event: L.LeafletMouseEvent, _index: number) {}

  markerDragEnd(_event: L.DragEndEvent, _index: number) {}
}
