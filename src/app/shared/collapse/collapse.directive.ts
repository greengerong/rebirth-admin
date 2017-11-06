import {
  Directive,
  ElementRef,
  forwardRef,
  HostBinding,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appCollapse]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CollapseDirective),
      multi: true
    }
  ],
  host: { '[class.collapse]': 'true' }
})
export class CollapseDirective implements OnChanges {
  @HostBinding('style.display')
  display: string;

  @HostBinding('class.in')
  @HostBinding('class.show')
  @HostBinding('attr.aria-expanded')
  @Input('appCollapse') collapse: boolean;

  protected elementRef: ElementRef;
  protected renderer: Renderer2;

  constructor(elementRef: ElementRef, renderer2: Renderer2) {
    this.elementRef = elementRef;
    this.renderer = renderer2;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.toggle();
  }

  toggle(): void {
    if (this.collapse) {
      this.hide();
    } else {
      this.show();
    }
  }

  hide(): void {
    this.collapse = false;
    this.display = 'none';
  }

  show(): void {
    this.collapse = true;
    this.display = 'block';
    this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'visible');
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', 'auto');
  }
}
