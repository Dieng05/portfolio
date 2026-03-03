import { Component } from '@angular/core';
import {Card, CardModule} from 'primeng/card';
import {Experience} from '../experience/experience';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true,
  imports: [CardModule]
})
export class About {

}
