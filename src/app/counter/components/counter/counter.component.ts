import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  public counter: number = 10;

  actionCounter(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
