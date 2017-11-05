import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMockComponent } from './order-mock.component';

describe('OrderMockComponent', () => {
  let component: OrderMockComponent;
  let fixture: ComponentFixture<OrderMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
