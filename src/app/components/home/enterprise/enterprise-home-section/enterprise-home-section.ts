import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Subscription, interval } from "rxjs";

import { LookingForIcons } from "../../../../shared/components/common/home-section-slider/looking-for-icons/looking-for-icons";

@Component({
  selector: "app-enterprise-home-section",
  imports: [LookingForIcons, RouterModule],
  templateUrl: "./enterprise-home-section.html",
  styleUrls: ["./enterprise-home-section.scss"],
})
export class EnterpriseHomeSection {
  public textToType = "Much Is House Worth ?";
  public typedText = "";
  public animationSubscription: Subscription | undefined;

  ngOnInit() {
    this.startTypingAnimation();
  }

  ngOnDestroy() {
    if (this.animationSubscription) {
      this.animationSubscription.unsubscribe();
    }
  }

  startTypingAnimation() {
    const charactersArray = this.textToType.split("");
    let currentIndex = 0;
    let eraseMode = false;

    this.animationSubscription = interval(150).subscribe(() => {
      if (!eraseMode) {
        if (currentIndex < charactersArray.length) {
          this.typedText += charactersArray[currentIndex];
          currentIndex++;
        } else {
          eraseMode = true;
        }
      } else {
        if (this.typedText.length > 0) {
          this.typedText = this.typedText.slice(0, -1);
        } else {
          eraseMode = false;
          currentIndex = 0;
        }
      }
    });
  }
}
