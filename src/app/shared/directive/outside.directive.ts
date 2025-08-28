import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  output,
} from "@angular/core";

@Directive({
  selector: "[clickOutside]",
})
export class ClickOutsideDirective {
  private elementRef = inject(ElementRef);

  readonly clickOutside = output();

  @HostListener("document:click", ["$event.target"])
  public onClick(targetElement: HTMLElement): void {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      // TODO: The 'emit' function requires a mandatory Event argument
      this.clickOutside.emit();
    }
  }
}
