import { TestBed } from '@angular/core/testing';
import { ScrollTopComponent } from './scroll-top.component';

describe('ScrollTopComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollTopComponent],
    }).compileComponents();
  });

  it('should create the scroll top component', () => {
    const fixture = TestBed.createComponent(ScrollTopComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should start with isVisible false when scrollY is 0', () => {
    const fixture = TestBed.createComponent(ScrollTopComponent);
    const component = fixture.componentInstance;
    expect(component.isVisible()).toBe(false);
  });
});
