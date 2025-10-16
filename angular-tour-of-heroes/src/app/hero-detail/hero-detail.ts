import { CommonModule, UpperCasePipe, Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero-service';


@Component({
  selector: 'app-hero-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css'
})
export class HeroDetail {
  hero: Hero | undefined;
  

  constructor(
    private route: ActivatedRoute,
    private heroservice: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
    console.log(this.hero)
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroservice.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
