import { Component } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  standalone: true,
  imports: [Menubar]
})
export class Navigation {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        command: () => this.navigateTo('accueil')
      },
      {
        label: 'À-propos',
        icon: 'pi pi-star',
        command: () => this.navigateTo('a-propos')
      },
      {
        label: 'Experiences',
        icon: 'pi pi-briefcase',
        command: () => this.navigateTo('experiences')
      },
      {
        label: 'Projets',
        icon: 'pi pi-folder',
        command: () => this.navigateTo('projets')
      },
      {
        label: 'Formations',
        icon: 'pi pi-book',
        command: () => this.navigateTo('formations')
      },
      {
        label: 'Competences',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Frontend',
            icon: 'pi pi-bolt',
            command: () => this.navigateTo('competences')
          },
          {
            label: 'Backend',
            icon: 'pi pi-server',
            command: () => this.navigateTo('competences')
          },
          {
            label: 'Mobile',
            icon: 'pi pi-mobile',
            command: () => this.navigateTo('competences')
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        command: () => this.navigateTo('contact')
      }
    ]
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
