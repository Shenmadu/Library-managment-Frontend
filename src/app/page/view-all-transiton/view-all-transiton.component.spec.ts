import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTransitonComponent } from './view-all-transiton.component';

describe('ViewAllTransitonComponent', () => {
  let component: ViewAllTransitonComponent;
  let fixture: ComponentFixture<ViewAllTransitonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllTransitonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllTransitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
