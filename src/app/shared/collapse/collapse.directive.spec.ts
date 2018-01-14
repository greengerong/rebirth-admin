import { Component } from '@angular/core';
import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import {
  TestBedUtils,
  TestComponent,
} from '../../../test-utils/test-bed-utils';
import { CollapseDirective } from './collapse.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div id="collapseHost" [appCollapse]="props[\'collapse\']">collapse test</div>`,
})
class TestCollapseDirectiveComponent {
  props: { [key: string]: any } = {};
}

describe('CollapseDirective', () => {
  let fixture: ComponentFixture<TestCollapseDirectiveComponent>;

  TestBedUtils.configureTestingModule({
    declarations: [TestCollapseDirectiveComponent],
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCollapseDirectiveComponent);
    fixture.detectChanges();
  });

  it(
    'should hide element when collapse',
    async(() => {
      const component = fixture.componentInstance;
      component.props.collapse = true;
      fixture.detectChanges();
      const $element = fixture.debugElement.query(By.css('#collapseHost'));

      expect($element.styles.display).toEqual('none');
    }),
  );

  it(
    'should show element when not collapse',
    async(() => {
      const component: any = fixture.componentInstance;
      component.props.collapse = false;
      fixture.detectChanges();
      const $element = fixture.debugElement.query(By.css('#collapseHost'));

      expect($element.styles.overflow).toEqual('visible');
      expect($element.styles.height).toEqual('auto');
      expect($element.styles.display).toEqual('block');
    }),
  );
});
