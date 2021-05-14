import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneStoreProductListComponent } from './phone-store-product-list.component';

describe('PhoneStoreProductListComponent', () => {
  let component: PhoneStoreProductListComponent;
  let fixture: ComponentFixture<PhoneStoreProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneStoreProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneStoreProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
