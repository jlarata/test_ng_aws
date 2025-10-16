import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero-service';
import { Hero } from '../hero';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }
}
