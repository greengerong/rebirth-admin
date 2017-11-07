import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestBedUtils, TestComponent } from '../../../test-utils/test-bed-utils';
import { CollapseDirective } from './collapse.directive';
import { By } from '@angular/platform-browser';

describe('CollapseDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBedUtils.configureTestingModule({
      declarations: []
    })
      .overrideComponent(TestComponent, {
        set: { template: '<div id="collapseHost" [appCollapse]="props[\'collapse\']">collapse test</div>' }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should hide element when collapse', async(() => {
    const component = fixture.componentInstance;
    component.props.collapse = true;
    fixture.detectChanges();
    const $element = fixture.debugElement.query(By.css('#collapseHost'));

    expect($element.styles.display).toEqual('none');
  }));

  it('should show element when not collapse', async(() => {
    const component: any = fixture.componentInstance;
    component.props.collapse = false;
    fixture.detectChanges();
    const $element = fixture.debugElement.query(By.css('#collapseHost'));

    expect($element.styles.overflow).toEqual('visible');
    expect($element.styles.height).toEqual('auto');
    expect($element.styles.display).toEqual('block');
  }));

});
