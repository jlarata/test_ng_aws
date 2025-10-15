import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class Heroes {
  heroes = HEROES;
  selectedHero?: Hero;
  
  
/*   hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }; */
  
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}
