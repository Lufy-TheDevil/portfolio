import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header.component';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([]), PortfolioDataService],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle mobile menu when toggleMobileMenu is called', () => {
    expect(component.isMobileMenuOpen()).toBe(false);
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(true);
    component.closeMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(false);
  });

  it('should close mobile menu on Escape key press', () => {
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(true);

    component.onEscape();
    expect(component.isMobileMenuOpen()).toBe(false);
  });

  it('should render the brand with Aklesh Ramola', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const brand = compiled.querySelector('.brand-name');
    expect(brand?.textContent).toContain('Aklesh Ramola');
  });

  it('should render the sidebar menu button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const menuBtn = compiled.querySelector('.sidebar-menu-btn');
    expect(menuBtn).toBeTruthy();
  });

  it('should render desktop navigation links for Home, Experience, Projects, and Contact', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const desktopNav = compiled.querySelector('.desktop-nav');
    expect(desktopNav).toBeTruthy();
    const links = desktopNav?.querySelectorAll('.nav-link');
    expect(links?.length).toBe(4);
    const linkTexts = Array.from(links || []).map((l) => l.textContent?.trim());
    expect(linkTexts).toEqual(['Home', 'Experience', 'Projects', 'Contact']);
  });
});
