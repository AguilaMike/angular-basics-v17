import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterModule } from "./counter/counter.config";
import { HeroesModule } from './heroes/heroes.config';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, ...CounterModule, ...HeroesModule]
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
}
