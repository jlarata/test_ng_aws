import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class Heroes {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
