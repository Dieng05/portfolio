import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from '../../services/Projet.service';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import {ProjetModel} from '../../models/ProjetModel';
import {Image} from 'primeng/image';

@Component({
  selector: 'app-projet-details',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DividerModule,
    CardModule,
    ChipModule,
    Image
  ],
  templateUrl: './projet-details.html',
  styleUrl: './projet-details.scss',
})
export class ProjetDetails implements OnInit {
  projet?: ProjetModel;
  idProjet!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projetService: ProjetService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idProjet = +params['idProjet'];
      this.projet = this.projetService.getProjetById(this.idProjet);
    });
  }

  retourAuxProjets(): void {
    this.router.navigate(['/']);
  }

  ouvrirGithub(): void {
    if (this.projet?.lienGithub) {

      window.open(this.projet.lienGithub, '_blank');
    } else {
      console.log('❌ Aucun lien GitHub disponible pour ce projet');
      console.log('Projet:', this.projet);
    }
  }
}
