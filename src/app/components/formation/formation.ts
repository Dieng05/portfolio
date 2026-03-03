import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationModel } from '../../models/formation.model';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formation.html',
  styleUrl: './formation.scss',
})
export class Formation implements OnInit {
  formations: FormationModel[] = [];

  ngOnInit() {
    this.formations = [
      new FormationModel(
        'MASTER 1 MIAGE',
        'Université Grenoble Alpes',
        '2025',
        'En cours',
        'Grenoble, France',
        'pi pi-graduation-cap',
        '#667eea'
      ),
      new FormationModel(
        'MASTER MIAGE',
        'Université Gaston Berger',
        '2023',
        'Obtenu',
        'Saint-Louis, Sénégal',
        'pi pi-book',
        '#4299e1'
      ),
      new FormationModel(
        'LICENCE MIAGE',
        'Université Gaston Berger',
        '2021',
        'Obtenu',
        'Saint-Louis, Sénégal',
        'pi pi-star',
        '#48bb78'
      )
    ];
  }
}
