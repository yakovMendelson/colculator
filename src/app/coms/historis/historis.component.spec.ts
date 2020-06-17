import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorisComponent } from './historis.component';

describe('HistorisComponent', () => {
  let component: HistorisComponent;
  let fixture: ComponentFixture<HistorisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
