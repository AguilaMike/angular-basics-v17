import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dbz-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.scss'
})
export class AddCharacterComponent {
  @Output() onNewCharacter = new EventEmitter<Character>();
  public newCharacter: Character = { id: '', name: '', power: 0 };

  constructor() {
    this.resetCharacter();
  }

  private resetCharacter(): void {
    this.newCharacter = {
      id: '',
      name: '',
      power: 0,
    };
  }

  emitCharacter() {
    if (this.newCharacter.name.trim().length === 0) return;
    this.onNewCharacter.emit(this.newCharacter);
    this.resetCharacter();
  }
}
