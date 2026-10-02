import { TestBed } from '@angular/core/testing';
import { PortfolioDataService } from './portfolio-data.service';

describe('PortfolioDataService', () => {
  let service: PortfolioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return developer contact information for Aklesh Ramola', () => {
    const contact = service.getContactInfo();
    expect(contact.name).toBe('Aklesh Ramola');
    expect(contact.title).toBe('Software Developer');
  });

  it('should contain the 4 core ERP systems (BM-CRM, BM-ERP, BM-TASK, BM-WMS)', () => {
    const experiences = service.getExperiences();
    expect(experiences.length).toBe(4);
    const names = experiences.map((e) => e.systemName);
    expect(names).toContain('BM-CRM');
    expect(names).toContain('BM-ERP');
    expect(names).toContain('BM-TASK');
    expect(names).toContain('BM-WMS');
  });

  it('should contain projects with TypeScript structure', () => {
    const projects = service.getProjects();
    expect(projects.length).toBeGreaterThanOrEqual(3);
    const titles = projects.map((p) => p.title);
    expect(titles).toContain('Expense Tracker');
    expect(titles).toContain('Fleet Management System');
    expect(titles).toContain('Enterprise Dispatch & Inventory');
  });

  it('should contain all 9 domain items', () => {
    const domains = service.getDomainItems();
    expect(domains.length).toBe(9);
  });
});
