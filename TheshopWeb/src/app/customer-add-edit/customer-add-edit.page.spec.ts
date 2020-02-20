import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerAddEditPage } from './customer-add-edit.page';

describe('CustomerAddEditPage', () => {
  let component: CustomerAddEditPage;
  let fixture: ComponentFixture<CustomerAddEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
