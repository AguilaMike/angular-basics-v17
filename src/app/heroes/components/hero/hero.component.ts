import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  public changes = { isVisibleName: true, isVisibleAge: true, reset: false };
  public name: string = 'Iroman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
    this.changes.isVisibleName = false;
    this.changes.reset = true;
  }

  changeAge(): void {
    this.age = 25;
    this.changes.isVisibleAge = false;
    this.changes.reset = true;
  }

  resetHero(): void {
    this.name = 'Iroman';
    this.age = 45;
    this.changes.isVisibleName = true;
    this.changes.isVisibleAge = true;
    this.changes.reset = false;
  }
}
