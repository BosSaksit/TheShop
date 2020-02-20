import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaleSummaryListPage } from './sale-summary-list.page';

describe('SaleSummaryListPage', () => {
  let component: SaleSummaryListPage;
  let fixture: ComponentFixture<SaleSummaryListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleSummaryListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaleSummaryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
