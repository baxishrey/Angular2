import { Component } from '@angular/core';
import  { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

const HEROES:Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@
Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl:"heroes.component.html",
  styleUrls:["heroes.component.css"],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
title = 'Tour of Heroes';
selectedHero: Hero;
heroes:Hero[];

    constructor(
        private heroService: HeroService,
        private router: Router) { }

onSelect(hero: Hero) : void {
  this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

  ngOnInit() : void {
    this.getHeroes();
  }
}
