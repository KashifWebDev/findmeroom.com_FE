import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { FeatherIcons } from "../../../../shared/components/ui/feather-icons/feather-icons";

@Component({
  selector: "app-parallax-image-home-section",
  imports: [FeatherIcons, CommonModule],
  templateUrl: "./parallax-image-home-section.html",
  styleUrls: ["./parallax-image-home-section.scss"],
})
export class ParallaxImageHomeSection {
  public open: boolean = false;
  public selectedItem: string = "Any Property type";

  openMenu() {
    this.open = !this.open;
  }

  changedItem(item: string) {
    this.selectedItem = item;
  }
}
