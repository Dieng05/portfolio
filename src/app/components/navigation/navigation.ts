import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';
import { filter } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  standalone: true,
  imports: [CommonModule, Menubar]
})
export class Navigation implements OnInit {
  items: MenuItem[] = [];
  private pendingScroll: string | null = null;

  constructor(
    private scrollService: ScrollService,
    private router: Router
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.pendingScroll) {
          setTimeout(() => {
            this.scrollService.scrollToSection(this.pendingScroll!);
            this.pendingScroll = null;
          }, 100);
        }
      });
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        command: () => this.scrollTo('accueil')
      },
      {
        label: 'Experiences',
        icon: 'pi pi-briefcase',
        command: () => this.scrollTo('experiences')
      },
      {
        label: 'Projets',
        icon: 'pi pi-folder',
        command: () => this.scrollTo('projets')
      },
      {
        label: 'Formations',
        icon: 'pi pi-graduation-cap',
        command: () => this.scrollTo('formations')
      },
      {
        label: 'Competences',
        icon: 'pi pi-star',
        command: () => this.scrollTo('contact')
      }
    ];
  }

  scrollTo(sectionId: string): void {
    this.pendingScroll = sectionId;
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.scrollService.scrollToSection(sectionId);
      this.pendingScroll = null;
    } else {
      this.router.navigate(['/']);
    }
  }
}
