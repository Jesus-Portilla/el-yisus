import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromedioTotalComponent } from './promedio-total.component';

describe('PromedioTotalComponent', () => {
  let component: PromedioTotalComponent;
  let fixture: ComponentFixture<PromedioTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromedioTotalComponent]
    });
    fixture = TestBed.createComponent(PromedioTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
