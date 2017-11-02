import {
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[collapse]',
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
  @Output() public collapsed: EventEmitter<any> = new EventEmitter();
  @Output() public expanded: EventEmitter<any> = new EventEmitter();

  @HostBinding('style.display')
  display: string;

  @HostBinding('attr.aria-hidden')
  isCollapsed = false;

  @HostBinding('class.collapse')
  isCollapse = true;

  @HostBinding('class.collapsing')
  isCollapsing = false;

  @HostBinding('class.in')
  @HostBinding('class.show')
  @HostBinding('attr.aria-expanded')
  @Input() collapse: boolean;

  protected el: ElementRef;
  protected renderer: Renderer2;

  public constructor(_el: ElementRef, _renderer: Renderer2) {
    this.el = _el;
    this.renderer = _renderer;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.toggle();
  }

  public toggle(): void {
    if (this.collapse) {
      this.hide();
    } else {
      this.show();
    }
  }

  public hide(): void {
    this.isCollapse = false;
    this.isCollapsing = true;

    this.collapse = false;
    this.isCollapsed = true;

    this.isCollapse = true;
    this.isCollapsing = false;

    this.display = 'none';
  }

  public show(): void {
    this.isCollapse = false;
    this.isCollapsing = true;

    this.collapse = true;
    this.isCollapsed = false;

    this.display = 'block';
    this.isCollapse = true;
    this.isCollapsing = false;
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'visible');
    this.renderer.setStyle(this.el.nativeElement, 'height', 'auto');
  }
}
