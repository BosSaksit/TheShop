import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductAddEditPage } from './product-add-edit.page';

describe('ProductAddEditPage', () => {
  let component: ProductAddEditPage;
  let fixture: ComponentFixture<ProductAddEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
