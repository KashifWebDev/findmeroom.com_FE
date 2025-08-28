import { Component } from "@angular/core";

import { Grid2 } from "../../portfolio/grid2/grid2";

@Component({
  selector: "app-image-with-effect",
  imports: [Grid2],
  templateUrl: "./image-with-effect.html",
  styleUrls: ["./image-with-effect.scss"],
})
export class ImageWithEffect {
  public bgImage = "assets/images/parallax/3.jpg";
  public title = "image with effect";
  public parent = "Home";
  public child = "image with effect";
}
