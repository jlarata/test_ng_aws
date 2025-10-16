import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero-service';
import { MessageService } from '../message-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule, FormsModule, RouterModule],
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

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

}
