import { Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { ExperienceItem } from '../../core/models/portfolio.model';
import { RouterLink } from '@angular/router';

interface LifecycleStep {
  id: string;
  stepNumber: string;
  label: string;
  systemId: string;
  description: string;
  dataEntities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  protected readonly dataService = inject(PortfolioDataService);

  readonly experiences = this.dataService.getExperiences();

  readonly lifecycleSteps: LifecycleStep[] = [
    {
      id: 'step-1',
      stepNumber: '01',
      label: 'CRM & Pipeline',
      systemId: 'bm-crm',
      description: 'Lead generation, qualification tracking, quotation issuance, and communication logging.',
      dataEntities: ['Leads', 'Follow-ups', 'Quotations'],
    },
    {
      id: 'step-2',
      stepNumber: '02',
      label: 'Orders & ERP Core',
      systemId: 'bm-erp',
      description: 'Sales order confirmation, role authorization, and production order creation.',
      dataEntities: ['Sales Orders', 'Production Orders', 'User Sessions'],
    },
    {
      id: 'step-3',
      stepNumber: '03',
      label: 'Task & Approvals',
      systemId: 'bm-task',
      description: 'Operational task assignments, multi-stage approval/rejection, and delegation audit trails.',
      dataEntities: ['Task Queue', 'Approval Logs', 'Role Policies'],
    },
    {
      id: 'step-4',
      stepNumber: '04',
      label: 'WMS & Fulfillment',
      systemId: 'bm-wms',
      description: 'Material inward inspection, shift allocations, floor dispatch, and inventory records.',
      dataEntities: ['Shift Rotas', 'Material Inward', 'Dispatch Logs'],
    },
    {
      id: 'step-5',
      stepNumber: '05',
      label: 'Invoicing & Closure',
      systemId: 'bm-erp',
      description: 'Commercial invoicing generation, tax computation, and ERP financial ledger synchronization.',
      dataEntities: ['Commercial Invoices', 'Audit Records'],
    },
  ];

  readonly activeStep = signal<LifecycleStep>(this.lifecycleSteps[0]);

  selectStep(step: LifecycleStep): void {
    this.activeStep.set(step);
  }

  scrollToSystem(systemId: string): void {
    const el = document.getElementById(systemId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
