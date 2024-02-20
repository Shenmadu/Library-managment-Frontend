import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBurrowersComponent } from './view-all-burrowers.component';

describe('ViewAllBurrowersComponent', () => {
  let component: ViewAllBurrowersComponent;
  let fixture: ComponentFixture<ViewAllBurrowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllBurrowersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllBurrowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
