import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the home component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should initialize with first domain selected', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(component.selectedDomainIndex).toBe(1);
    expect(component.selectedDomain().id).toBe('erp');
  });

  it('should cycle to next and previous domains correctly', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    component.nextDomain();
    expect(component.selectedDomainIndex).toBe(2);

    component.prevDomain();
    expect(component.selectedDomainIndex).toBe(1);
  });
});
