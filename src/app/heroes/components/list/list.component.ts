import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Hero {
  image?: string;
  alterEgo: string;
  name: string;
  company: string;
  age: number;
}

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public heroes: Hero[] = [];
  public heroesDeleted: string[] = [];

  constructor() {
    this.resetHeroes();
  }

  resetHeroes(): void {
    //https://akabab.github.io/superhero-api/api/all.json
    this.heroes = [
      { alterEgo: 'Ironman', name: 'Tony Stark', company: 'Marvel', age: 45, image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/346-iron-man.jpg' },
      { alterEgo: 'Spiderman', name: 'Peter Parker', company: 'Marvel', age: 25, image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/620-spider-man.jpg' },
      { alterEgo: 'Batman', name: 'Bruce Wayne', company: 'DC', age: 45, image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/70-batman.jpg' },
      { alterEgo: 'Superman', name: 'Clark Kent', company: 'DC', age: 45, image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/644-superman.jpg' }
    ];
    this.heroesDeleted = [];
  }

  deleteLastHeroe(): void {
    const deleted = this.heroes.pop();
    if (deleted) {
      this.heroesDeleted.push(deleted.name);
    }
  }

  get heroesDeletedDescription(): string {
    return this.heroesDeleted.join(', ');
  }
}
