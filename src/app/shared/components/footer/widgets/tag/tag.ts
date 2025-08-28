import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { tagFooterData } from "../../../../data/footer";

@Component({
  selector: "app-tag",
  imports: [CommonModule, RouterModule],
  templateUrl: "./tag.html",
  styleUrls: ["./tag.scss"],
})
export class Tag {
  public tagFooterData = tagFooterData;
  public isTagData: boolean = false;

  openTag() {
    this.isTagData = !this.isTagData;
  }
}
