import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetail } from "../hero-detail/hero-detail";
import { HeroService } from '../hero-service';
import { MessageService } from '../message-service';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule, FormsModule, HeroDetail],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class Heroes {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

}
