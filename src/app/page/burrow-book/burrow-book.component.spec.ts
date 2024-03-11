import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurrowBookComponent } from './burrow-book.component';

describe('BurrowBookComponent', () => {
  let component: BurrowBookComponent;
  let fixture: ComponentFixture<BurrowBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurrowBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BurrowBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
