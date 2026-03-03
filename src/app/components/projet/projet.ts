import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {ProjetModel} from '../../models/ProjetModel';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projet.html',
  styleUrls: ['./projet.scss']
})
export class Projet implements OnInit {
  projets!: ProjetModel[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.projets = [
      new ProjetModel(
        1,
        'Application intelligence artificielle',
        'pi pi-desktop',
        'telephone-7198504_1280.jpg',
        '',
        [],
        [],
        [],
        'Application Flutter d\'IA pour détecter les carences des plantes via leurs feuilles'
      ),
      new ProjetModel(
        2,
        'Gestion Aéroport',
        'pi pi-mobile',
        'gestion aréroport.jpg',
        '',
        [],
        [],
        [],
        'Système de gestion des vols, hangar, pistes et vols pour aéroport'
      ),
      new ProjetModel(
        4,
        'site e-commerce HTML/CSS/JS',
        'pi pi-code',
        'pexels-mart-production-7679456.jpg',
        '',
        [],
        [],
        [],
        'Site e-commerce moderne développé uniquement avec HTML5, CSS3 et JavaScript'
      ),
      new ProjetModel(
        5,
        'application e-commerce',
        'pi pi-database',
        'sites en ligne  (1).jpg',
        '',
        [],
        [],
        [],
        'application ecommerce avec spring-boot et PHP'
      ),
      new ProjetModel(
        3,
        'Gestion des inscriptions',
        'pi pi-cloud',
        'gestion inscription.jpg',
        '',
        [],
        [],
        [],
        'Application de gestion des inscriptions des étudiants'
      ),
      new ProjetModel(
        6,
        'Portail web',
        'pi pi-server',
        'portail.jpg',
        '',
        [],
        [],
        [],
        'Reproduction du portail web des étudiants de l\'UGB'
      )
    ].sort((a, b) => a.idProjet - b.idProjet);;
  }

  redirectToDetails(idProjet: number): void {
    if (idProjet === 1 || idProjet === 2 || idProjet === 3 || idProjet === 4 || idProjet === 5) {
      this.router.navigate(['/projets-details', idProjet]);
    }
  }
}
