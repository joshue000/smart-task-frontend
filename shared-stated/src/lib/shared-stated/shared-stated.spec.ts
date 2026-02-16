import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedStated } from './shared-stated';

describe('SharedStated', () => {
  let component: SharedStated;
  let fixture: ComponentFixture<SharedStated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedStated],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedStated);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
