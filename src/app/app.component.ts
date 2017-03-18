import { Component, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RebirthUIConfig } from 'ng4-rebirth-ui';
import { ThemeService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private rebirthConfig: RebirthUIConfig,
              private viewContainerRef: ViewContainerRef,
              private router: ActivatedRoute,
              private themeService: ThemeService,
              private renderer: Renderer2,
              private elementRef: ElementRef) {
    this.rebirthConfig.rootContainer = this.viewContainerRef;
    this.router.queryParams.subscribe((params: any) => {
      this.themeService.setupTheme(params.theme, this.renderer, this.elementRef);
    });
    // this.rebirthConfig.extend(REBIRTH_UI_I18N_ZHCN); i18n
  }
}
