import { Injectable, signal } from '@angular/core';
import {
  Project,
  ExperienceItem,
  SkillCategory,
  DomainItem,
  SocialLink,
  ContactInfo,
} from '../models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  /**
   * General Developer & Contact Information
   * Edit this section to personalize your portfolio details.
   */
  readonly contactInfo: ContactInfo = {
    name: 'Aklesh Ramola',
    title: 'Software Developer',
    email: 'akleshsinghramola@gmail.com',
    emailPlaceholder: false,
    location: 'Open to Remote / Relocation',
    availability: 'Available for Engineering Roles & Business Systems Development',
    intro:
      'Software developer focused on backend systems, ERP applications and full-stack development. Experienced in building reliable database-backed business software, structured workflows, and role-based enterprise tools.',
  };

  /**
   * Primary Technology Stack Line (Restrained)
   */
  readonly techStackSummary = [
    'ASP.NET',
    'C#',
    'SQL Server',
    'Entity Framework',
    'JavaScript',
    'Angular',
  ];

  /**
   * Social / Professional Links
   */
  readonly socialLinks: SocialLink[] = [
    {
      platform: 'GitHub',
      label: 'GitHub',
      url: 'https://github.com/Lufy-TheDevil',
      isPlaceholder: false,
      iconName: 'github',
    },
    {
      platform: 'LinkedIn',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aklesh-ramola-b2308b356',
      isPlaceholder: false,
      iconName: 'linkedin',
    },
    {
      platform: 'Email',
      label: 'Email',
      url: 'mailto:akleshsinghramola@gmail.com',
      isPlaceholder: false,
      iconName: 'mail',
    },
  ];

  /**
   * Technical Skills Grouped by Category
   */
  readonly skillCategories: SkillCategory[] = [
    {
      category: 'Backend',
      description: 'Server-side architecture, business logic & ORM integration',
      skills: [
        'C#',
        'ASP.NET MVC',
        'ASP.NET Web Forms',
        '.NET Framework',
        'Entity Framework',
        'ADO.NET',
      ],
    },
    {
      category: 'Database',
      description: 'Relational data modeling, querying & procedure development',
      skills: ['SQL Server', 'LocalDB', 'T-SQL Stored Procedures', 'Schema Design'],
    },
    {
      category: 'Frontend',
      description: 'Modern client interfaces & interactive tabular business views',
      skills: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Angular', 'DataTables'],
    },
    {
      category: 'Engineering / Architecture',
      description: 'Enterprise security patterns, workflows & domain patterns',
      skills: [
        'Authentication',
        'Authorization',
        'Role-Based Access Control (RBAC)',
        'Session Management',
        'REST APIs',
        'Database-driven application design',
        'Full-stack development',
      ],
    },
  ];

  /**
   * Systems / Domain Experience
   * Communicating real business software competency beyond generic CRUD.
   */
  readonly domainItems: DomainItem[] = [
    {
      id: 'erp',
      title: 'ERP Systems',
      shortDescription:
        'Core enterprise resource planning modules connecting business operations across departments.',
      typicalWorkflows: [
        'Multi-department data synchronization',
        'Transaction consistency across ledger entries',
        'Operational audit logging',
      ],
      architecturalConsiderations: [
        'Relational integrity',
        'ACID transactions',
        'Role-scoped navigation',
      ],
    },
    {
      id: 'crm',
      title: 'CRM',
      shortDescription:
        'Customer relationship tracking from raw prospect acquisition to active client management.',
      typicalWorkflows: [
        'Lead qualification pipeline',
        'Follow-up reminders & interaction history',
        'Customer communication records',
      ],
      architecturalConsiderations: [
        'Lifecycle state machines',
        'Historical activity auditing',
        'Executive summaries',
      ],
    },
    {
      id: 'sales',
      title: 'Sales Workflows',
      shortDescription:
        'Structured quote-to-order-to-invoice pipelines enforcing pricing logic and approval steps.',
      typicalWorkflows: [
        'Formal quotation generation',
        'Sales order confirmation & lock',
        'Tax calculation & invoice dispatch',
      ],
      architecturalConsiderations: [
        'Immutable historical pricing',
        'Sequential document numbering',
        'Approval thresholds',
      ],
    },
    {
      id: 'warehouse',
      title: 'Warehouse Management (WMS)',
      shortDescription:
        'Inventory tracking, shift logistics, and physical dispatch management.',
      typicalWorkflows: [
        'Shift and operator assignment',
        'Material inward intake & physical inspection',
        'Stock movement logging',
      ],
      architecturalConsiderations: [
        'Concurrent stock reservations',
        'Batch/lot traceability',
        'Floor shift scheduling',
      ],
    },
    {
      id: 'task',
      title: 'Task Management',
      shortDescription:
        'Operational coordination platforms facilitating multi-level task lifecycle management.',
      typicalWorkflows: [
        'Delegation & re-assignment',
        'Multi-stage approval and rejection',
        'Status notification triggers',
      ],
      architecturalConsiderations: [
        'State transition enforcement',
        'Hierarchical authority checks',
        'Delegation accountability',
      ],
    },
    {
      id: 'production',
      title: 'Production Workflows',
      shortDescription:
        'Manufacturing work-order tracking from bill of materials to completed inventory.',
      typicalWorkflows: [
        'Production order issuance',
        'Material consumption recording',
        'Yield & completion sign-off',
      ],
      architecturalConsiderations: [
        'Bill-of-materials integrity',
        'WIP status tracking',
        'Downstream stock updates',
      ],
    },
    {
      id: 'auth',
      title: 'Authentication & Authorization',
      shortDescription:
        'Robust user verification, credential security, and permission containment.',
      typicalWorkflows: [
        'User authentication & persistent session management',
        'Permission checks on controller actions',
        'Password policies & reset flows',
      ],
      architecturalConsiderations: [
        'Secure session tokens',
        'Action-level authorization filters',
        'Credential hashing',
      ],
    },
    {
      id: 'rbac',
      title: 'Role-Based Systems',
      shortDescription:
        'Granular access control models assigning distinct operational scopes per business role.',
      typicalWorkflows: [
        'Role-scoped menu and page rendering',
        'Conditional action capabilities (view, edit, approve)',
        'Administrative role assignment',
      ],
      architecturalConsiderations: [
        'Principle of least privilege',
        'Cached permission sets',
        'Hierarchical role policies',
      ],
    },
    {
      id: 'db-apps',
      title: 'Database-Driven Applications',
      shortDescription:
        'End-to-end applications designed around normalized relational schemas and optimized queries.',
      typicalWorkflows: [
        'Stored procedure execution for high-volume transactions',
        'Dynamic search and paginated data grids',
        'Parameterized reports and aggregations',
      ],
      architecturalConsiderations: [
        'Schema normalization',
        'Index optimization',
        'Safe parameterization against SQL injection',
      ],
    },
  ];

  /**
   * Work Experience in ERP Domain
   * Details regarding BM-CRM, BM-ERP, BM-TASK, BM-WMS
   */
  readonly experiences: ExperienceItem[] = [
    {
      id: 'bm-crm',
      systemName: 'BM-CRM',
      role: 'Software Developer (Enterprise Applications)',
      companyContext: 'ERP-Domain Company',
      period: 'Internship & Professional Work',
      systemType: 'CRM',
      technologies: [
        'ASP.NET Web Forms',
        '.NET Framework 4',
        'ADO.NET',
        'SQL Server',
        'JavaScript',
      ],
      description:
        'Contributed to the core customer relationship and sales pipeline application used by sales teams and management to oversee customer lifecycles and revenue processes.',
      workflows: [
        'Lead capture, validation and qualification tracking',
        'Structured sales follow-ups and interaction history records',
        'Quotation generation and pricing calculations',
        'Sales order progression and commercial invoicing',
        'Executive & customer communication interfaces',
        'Management dashboards for sales performance and pipeline visibility',
      ],
      keyContributions: [
        'Maintained and extended business logic using ADO.NET and SQL Server stored procedures.',
        'Implemented validation and event-driven form handling within ASP.NET Web Forms architecture.',
        'Ensured seamless transition of data from lead status to formal quotations and confirmed orders.',
      ],
    },
    {
      id: 'bm-erp',
      systemName: 'BM-ERP',
      role: 'Software Developer (Enterprise Applications)',
      companyContext: 'ERP-Domain Company',
      period: 'Internship & Professional Work',
      systemType: 'ERP',
      technologies: [
        'ASP.NET MVC',
        'Entity Framework',
        'C#',
        'SQL Server',
        'JavaScript',
      ],
      description:
        'Participated in the engineering of centralized ERP modules handling manufacturing operations, material logistics, sales cycles, and secure platform access.',
      workflows: [
        'User authentication and session verification',
        'Fine-grained role authorization across business modules',
        'Production orders scheduling and execution status tracking',
        'Material inward intake, inspection, and inventory allocation',
        'Sales orders intake and commercial invoicing synchronization',
      ],
      keyContributions: [
        'Developed MVC controllers and Entity Framework data access routines supporting business transactions.',
        'Enforced authorization checks across sensitive ERP workflows to maintain operational security.',
        'Built tabular views and forms supporting complex multi-step data entry for inward materials.',
      ],
    },
    {
      id: 'bm-task',
      systemName: 'BM-TASK',
      role: 'Software Developer (Enterprise Applications)',
      companyContext: 'ERP-Domain Company',
      period: 'Internship & Professional Work',
      systemType: 'Task Management',
      technologies: [
        'ASP.NET MVC',
        'ADO.NET',
        'C#',
        'SQL Server',
        'JavaScript',
      ],
      description:
        'Engineered an internal task allocation and governance platform managing operational delegations, sign-offs, and multi-tier approval chains.',
      workflows: [
        'Task assignment with priority, due date, and target team member',
        'Reassignment workflows with audit logging of previous handlers',
        'Multi-stage approval and rejection sequences with mandatory comments',
        'Role-based workflow permissions governing who can initiate or close tasks',
      ],
      keyContributions: [
        'Architected clean state transitions for task lifecycle (Draft -> Assigned -> In-Review -> Approved / Rejected).',
        'Optimized SQL queries and ADO.NET calls to ensure rapid loading of task lists and team queues.',
        'Designed intuitive workflow interfaces facilitating rapid user decision-making.',
      ],
    },
    {
      id: 'bm-wms',
      systemName: 'BM-WMS',
      role: 'Software Developer (Enterprise Applications)',
      companyContext: 'ERP-Domain Company',
      period: 'Internship & Professional Work',
      systemType: 'WMS',
      technologies: [
        'ASP.NET Web Forms',
        '.NET Framework 4',
        'SQL Server',
        'JavaScript',
      ],
      description:
        'Contributed to the warehouse management platform optimizing operational staffing, shift scheduling, and warehouse floor activity synchronization.',
      workflows: [
        'Shift allocation and operator assignment matrices',
        'Warehouse operational workflow tracking and dispatch queues',
        'Location-based workflow handling and shift sign-offs',
      ],
      keyContributions: [
        'Implemented shift allocation logic ensuring no overlapping worker assignments.',
        'Maintained database interactions for operational log tracking.',
        'Enhanced UI responsiveness for floor managers performing daily shift handovers.',
      ],
    },
  ];

  /**
   * Projects (TypeScript data structure, easy to add/modify)
   */
  readonly projects = signal<Project[]>([
    {
      id: 'expense-tracker',
      title: 'Expense Tracker',
      subtitle: 'Personal Expense Management Application',
      description:
        'A personal expense management application focused on recording, displaying and managing expenses through a database-backed MVC application.',
      technologies: ['ASP.NET MVC', 'C#', 'SQL Server', 'JavaScript'],
      tags: ['ASP.NET MVC', 'C#', 'SQL Server', 'JavaScript', 'Relational DB'],
      githubUrl: 'https://github.com/Lufy-TheDevil/expense-tracker',
      demoUrl: undefined,
      isPlaceholder: false,
      featured: true,
      highlights: [
        'Structured expense categorization with parent-child category hierarchies',
        'SQL Server database schema with parameterized queries for transaction integrity',
        'Date range filtering and dynamic monthly/category expenditure aggregation',
        'Clean, responsive user interface designed for rapid daily record entry',
      ],
      architectureNotes:
        'Designed with classic MVC pattern separating data access, controller logic, and Razor views. Employs strong server-side validation alongside client-side JavaScript checks.',
    },
    {
      id: 'fleet-management',
      title: 'Fleet Management System',
      subtitle: 'Business Fleet & Driver Workflow Platform',
      description:
        'A business-oriented fleet management application involving users, authentication, authorization, sessions, fleet/driver workflows and role-based access.',
      technologies: [
        'ASP.NET MVC',
        'C#',
        'Entity Framework',
        'SQL Server',
        'JavaScript',
      ],
      tags: [
        'ASP.NET MVC',
        'Entity Framework',
        'C#',
        'SQL Server',
        'RBAC',
        'Session Management',
      ],
      githubUrl: 'https://github.com/Lufy-TheDevil/fleet-management-system',
      demoUrl: undefined,
      isPlaceholder: false,
      featured: true,
      highlights: [
        'Role-Based Access Control distinguishing Dispatchers, Fleet Managers, and Drivers',
        'Session-based authentication safeguarding administrative and operational controllers',
        'Vehicle status tracking (In-Service, Maintenance, On-Route) with history logs',
        'Driver assignment workflow ensuring active license validation and shift availability',
      ],
      architectureNotes:
        'Built with ASP.NET MVC and Entity Framework Code-First / Database-First approach. Implements custom Action Filters for session verification and authorization guards.',
    },
    {
      id: 'enterprise-inventory',
      title: 'Enterprise Dispatch & Inventory',
      subtitle: 'Full-Stack Warehouse Dispatch Platform',
      description:
        'A modular inventory and logistics management application built with ASP.NET, Entity Framework, SQL Server, and modern frontend architecture.',
      technologies: ['C#', 'ASP.NET', 'SQL Server', 'Angular', 'Entity Framework'],
      tags: ['C#', 'ASP.NET', 'SQL Server', 'Angular', 'Database-Driven'],
      githubUrl: 'https://github.com/Lufy-TheDevil',
      demoUrl: undefined,
      isPlaceholder: false,
      featured: true,
      highlights: [
        'Multi-warehouse stock reservation logic preventing inventory collision',
        'Normalized database schema with T-SQL procedures for transaction auditing',
        'Role-governed operational dispatch workflows for warehouse staff',
      ],
      architectureNotes:
        'Engineered with clean architectural separation across data access layers, service controllers, and responsive frontend views.',
    },
  ]);

  getProjects(): Project[] {
    return this.projects();
  }

  getProjectById(id: string): Project | undefined {
    return this.projects().find((p) => p.id === id);
  }

  getFeaturedProjects(): Project[] {
    return this.projects().filter((p) => p.featured);
  }

  getExperiences(): ExperienceItem[] {
    return this.experiences;
  }

  getSkillCategories(): SkillCategory[] {
    return this.skillCategories;
  }

  getDomainItems(): DomainItem[] {
    return this.domainItems;
  }

  getSocialLinks(): SocialLink[] {
    return this.socialLinks;
  }

  getContactInfo(): ContactInfo {
    return this.contactInfo;
  }
}
