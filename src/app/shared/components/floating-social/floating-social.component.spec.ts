import { TestBed } from '@angular/core/testing';
import { FloatingSocialComponent } from './floating-social.component';

describe('FloatingSocialComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingSocialComponent],
    }).compileComponents();
  });

  it('should create the floating social component', () => {
    const fixture = TestBed.createComponent(FloatingSocialComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render social links (GitHub, LinkedIn, Email)', () => {
    const fixture = TestBed.createComponent(FloatingSocialComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a.social-btn');
    expect(links.length).toBe(3);
  });
});
