import { TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();
  });

  it('should create the contact component', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should initialize with invalid empty form', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    expect(component.contactForm.valid).toBe(false);
  });

  it('should validate email format properly', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    const emailControl = component.contactForm.get('email');

    emailControl?.setValue('invalid-email');
    expect(emailControl?.valid).toBe(false);

    emailControl?.setValue('valid.developer@example.com');
    expect(emailControl?.valid).toBe(true);
  });

  it('should set isSubmitted when valid form is submitted', async () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;

    component.contactForm.setValue({
      name: 'Test Recruiter',
      email: 'recruiter@company.com',
      subject: 'Backend Engineering Opportunity',
      message: 'We are interested in discussing your ERP experience with our team.',
    });

    expect(component.contactForm.valid).toBe(true);
    component.onSubmit();
    expect(component.isSubmitting()).toBe(true);
  });
});
