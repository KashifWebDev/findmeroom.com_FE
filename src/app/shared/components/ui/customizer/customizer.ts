import { Component, inject, output, input, PLATFORM_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { LayoutService } from "../../../../shared/services/layout.service";
import { FeatherIcons } from "../feather-icons/feather-icons";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-customizer",
  imports: [FeatherIcons, FormsModule],
  templateUrl: "./customizer.html",
  styleUrls: ["./customizer.scss"],
})
export class Customizer {
  private platformId = inject(PLATFORM_ID);
  layout = inject(LayoutService);

  readonly themeColor1 = input<string>();
  readonly themeColor2 = input<string>();
  readonly divClass = input<string>();

  readonly color1 = output<string>();
  readonly color2 = output<string>();

  public isOpen: boolean = false;
  public themeColor: boolean = false;
  public themeDirection: boolean = false;
  public ThemeColor: string;

  public layout_version: string | null;
  public layout_type: string | null;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.layout_version = localStorage.getItem("layout_version");
      this.layout_type = localStorage.getItem("layout_type");
    } else {
      this.layout_version = null;
      this.layout_type = null;
    }

    if (this.layout_version == "dark-layout") {
      this.themeColor = true;
      document.body.classList.add("dark-layout");
      this.layout.config.settings.layout_version = "dark-layout";
    }
    if (this.layout_type == "rtl") {
      this.themeDirection = true;
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      document.body.classList.add("rtl");
      this.layout.config.settings.layout_type = "rtl";
    }
  }

  openCustomizer() {
    this.isOpen = true;
  }

  closeCustomizer() {
    this.isOpen = false;
  }

  changeThemeColor(color: boolean) {
    if (color == true) {
      document.body.classList.add("dark-layout");
      localStorage.setItem("layout_version", "dark-layout");
      this.layout.config.settings.layout_version = "dark-layout";
    } else {
      document.body.classList.remove("dark-layout");
      localStorage.setItem("layout_version", "");
      this.layout.config.settings.layout_version = "";
    }
  }

  changedDirection(direction: boolean) {
    if (direction == true) {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      document.body.classList.add("rtl");
      localStorage.setItem("layout_type", "rtl");
      this.layout.config.settings.layout_type = "rtl";
    } else {
      document.getElementsByTagName("html")[0].removeAttribute("dir");
      document.body.classList.remove("rtl");
      localStorage.setItem("layout_type", "");
      this.layout.config.settings.layout_type = "";
    }
  }

  changedColor1(color: string) {
    this.color1.emit(color);
  }

  changedColor2(color: string) {
    this.color2.emit(color);
  }
}
