import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { interval } from "rxjs";

import { LookingForIcons } from "../../../../shared/components/common/home-section-slider/looking-for-icons/looking-for-icons";

@Component({
  selector: "app-typed-image-home-section",
  imports: [LookingForIcons, RouterModule],
  templateUrl: "./typed-image-home-section.html",
  styleUrls: ["./typed-image-home-section.scss"],
})
export class TypedImageHomeSection {
  public view: { type: string } = { type: "" };
  public wordList: string[] = ["Live", "Work", "Wonder"];

  ngOnInit() {
    let idx = 0;
    let n = 0;
    let up = true;

    interval(200).subscribe(() => {
      const word = this.wordList[idx];
      const ln = word.length;

      if (up) {
        this.view.type = word.slice(0, n);
        n++;
      }
      if (n === ln + 1) {
        up = false;
      }
      if (!up) {
        this.view.type = word.slice(0, n);
        n--;
      }
      if (n === 0) {
        up = true;
        idx++;
      }
      if (idx === this.wordList.length) {
        idx = 0;
      }
    });
  }
}
