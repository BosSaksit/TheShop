import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaleSummaryDetailPage } from './sale-summary-detail.page';

describe('SaleSummaryDetailPage', () => {
  let component: SaleSummaryDetailPage;
  let fixture: ComponentFixture<SaleSummaryDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleSummaryDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaleSummaryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
