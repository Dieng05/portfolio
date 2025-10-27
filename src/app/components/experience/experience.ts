import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

interface ExperienceData {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  standalone: true,
  imports: [CommonModule]
})
export class Experience implements OnInit {

  experiences: ExperienceData[] = [
    {
      title: 'DÉVELOPPEUR FULL STACK',
      company: 'FINAPPLI SAS',
      location: 'Dakar, Sénégal',
      period: 'Avril 2025 – Août 2025',
      description: [
        'Analyse des besoins informatiques et traduction en spécifications fonctionnelles',
        'Modélisation et conception de solutions logicielles',
        'Rédaction et actualisation de la documentation technique',
        'Programmation et tests des objets et composants',
        'Paramétrage des applications, prototypage et adaptation',
        'Configuration de l\'environnement SWIFT (transactions Bancaires) : configuration clés admin, OPR et auto-client',
        'Maintenance des plateformes en production et support opérationnel client'
      ]
    },
    {
      title: 'DÉVELOPPEUR STAGIAIRE',
      company: 'FINAPPLI SAS',
      location: 'Dakar, Sénégal',
      period: 'Décembre 2024 – Mars 2025',
      description: [
        'Contribution à l\'analyse des besoins et traduction en spécifications techniques',
        'Programmation et test des objets et composants',
        'Paramétrage des applications, prototypage et adaptation',
        'Rédaction et actualisation de la documentation technique'
      ]
    },
    {
      title: 'DÉVELOPPEUR STAGIAIRE',
      company: 'WESTAFCOM',
      location: 'Dakar, Sénégal',
      period: 'Août 2023 – Février 2024',
      description: [
        'Participation à la spécification des besoins clients',
        'Développement de sites web personnalisés pour différents clients',
        'Déploiement et maintenance des sites web'
      ]
    }
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    // Scroll automatique vers le top en arrivant sur cette page
    this.scrollService.scrollToTop();
  }
}
