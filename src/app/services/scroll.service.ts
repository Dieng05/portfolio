import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private router: Router) {
    this.initializeScrollBehavior();
  }

  /**
   * Initialiser le comportement de scroll automatique
   */
  private initializeScrollBehavior(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.scrollToTop();
      });
  }

  /**
   * Scroll vers le top de la page avec animation fluide
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /**
   * Scroll vers un élément spécifique par son ID
   * @param elementId - ID de l'élément cible
   * @param offset - Décalage depuis le haut (par défaut 80px)
   */
  scrollToElement(elementId: string, offset: number = 80): void {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }

  /**
   * Scroll vers un élément avec délai
   * Utile après changement de route
   */
  scrollToElementWithDelay(elementId: string, delay: number = 500, offset: number = 80): void {
    setTimeout(() => {
      this.scrollToElement(elementId, offset);
    }, delay);
  }
}
