import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { TranslateService } from "@ngx-translate/core";

import { ClickOutsideDirective } from "../../../../directive/outside.directive";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-language",
  imports: [FeatherIcons, CommonModule, ClickOutsideDirective],
  providers: [TranslateService],
  templateUrl: "./language.html",
  styleUrls: ["./language.scss"],
})
export class Language {
  private translate = inject(TranslateService);

  public languageOpen: boolean = false;

  public languages = [
    {
      name: "English",
      code: "en",
    },
    {
      name: "French",
      code: "fr",
    },
    {
      name: "Arabic",
      code: "ar",
    },
    {
      name: "Spanish",
      code: "sp",
    },
  ];

  openLanguage() {
    this.languageOpen = !this.languageOpen;
  }

  changeLanguage(code: string) {
    this.translate.use(code);
  }
}
