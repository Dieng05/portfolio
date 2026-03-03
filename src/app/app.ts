import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/navigation/navigation';
import { CommonModule } from '@angular/common';
import {Home} from './pages/home/home';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [RouterOutlet, Navigation, CommonModule]
})
export class App {
  title = 'Ahmadou DIENG - Portfolio';
}
