import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoreAddPage } from './store-add.page';

describe('StoreAddPage', () => {
  let component: StoreAddPage;
  let fixture: ComponentFixture<StoreAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoreAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
