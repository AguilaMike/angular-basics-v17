import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent, AddCharacterComponent } from '../components/component.config';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: true,
  imports: [CommonModule, ListComponent, AddCharacterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  constructor(private dbzServices: DbzService) {}

  get characters(): Character[] {
    return this.dbzServices.characters;
  }

  onNewCharacter(character: Character): void {
    this.dbzServices.addCharacter(character);
  }

  onDeleteCharacter(id: string): void {
    this.dbzServices.deleteCharacterById(id);
  }
}
