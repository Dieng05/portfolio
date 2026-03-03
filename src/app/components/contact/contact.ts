import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

interface Competence {
  categorie: string;
  icon: string;
  color: string;
  skills: string[];
}

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ChipModule,
    DividerModule,
    TagModule,
    TooltipModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  competences: Competence[] = [];
  contactInfos: ContactInfo[] = [];

  contactForm = {
    nom: '',
    email: '',
    sujet: '',
    message: ''
  };

  ngOnInit() {
    this.initCompetences();
  }

  initCompetences() {
    this.competences = [
      {
        categorie: 'Backend',
        icon: 'pi pi-server',
        color: '#10b981',
        skills: ['Java', 'Kotlin ', 'Python', 'PHP', 'Spring Boot', 'Laravel']
      },
      {
        categorie: 'Frontend',
        icon: 'pi pi-desktop',
        color: '#3b82f6',
        skills: ['TypeScript', 'Angular', 'JavaScript', 'Ionic', 'Flutter', 'PrimeNG', 'PrimeFlex']
      },
      {
        categorie: 'Bases de données',
        icon: 'pi pi-database',
        color: '#f59e0b',
        skills: ['MySQL', 'Oracle', 'PostgreSQL']
      },
      {
        categorie: 'Intelligence Artificielle',
        icon: 'pi pi-brain',
        color: '#8b5cf6',
        skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Keras']
      },
      {
        categorie: 'Outils & Environnements',
        icon: 'pi pi-wrench',
        color: '#ef4444',
        skills: ['Figma (UI/UX)', 'SWIFT (Transactions Bancaires)', 'Développement en Architecture Micro-services','Méthodologie Agile']
      },
      {
        categorie: 'Finance & Management',
        icon: 'pi pi-chart-line',
        color: '#ec4899',
        skills: [
          'Gestion de Projet IT',
          'Analyse Financière',
          'Comptabilité Analytique',
          'Contrôle de Gestion'
        ]
      }
    ];
  }
  getTooltip(skill: string): string {
    const tooltips: { [key: string]: string } = {
      'SWIFT (Transactions Bancaires)': 'Protocole de messagerie financière internationale',
      'Docker': 'Conteneurisation d\'applications',
      'Figma (UI/UX)': 'Conception d\'interfaces utilisateur',
    };
    return tooltips[skill] || '';
  }
  onSubmit() {
    console.log('Formulaire soumis:', this.contactForm);
    alert('Message envoyé avec succès !');
  }

}
