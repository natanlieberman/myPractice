import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegerComponent } from './maneger.component';

describe('ManegerComponent', () => {
  let component: ManegerComponent;
  let fixture: ComponentFixture<ManegerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManegerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
