import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ListComponent {
  @Input() public characters: Character[] = [];
  @Output() public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  onDelete(id: string): void {
    this.onDeleteCharacter.emit(id);
  }
}
