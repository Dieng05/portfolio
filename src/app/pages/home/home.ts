import { Component } from '@angular/core';
import {About} from '../../components/about/about';
import {Experience} from '../../components/experience/experience';
import {Projet} from '../../components/projet/projet';
import {Formation} from '../../components/formation/formation';
import {Contact} from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    About,
    Experience,
    Projet,
    Formation,
    Contact
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
