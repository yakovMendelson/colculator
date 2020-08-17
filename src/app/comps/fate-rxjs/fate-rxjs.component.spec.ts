import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FateRxjsComponent } from './fate-rxjs.component';

describe('FateRxjsComponent', () => {
  let component: FateRxjsComponent;
  let fixture: ComponentFixture<FateRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FateRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FateRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
