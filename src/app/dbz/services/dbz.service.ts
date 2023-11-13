import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 15000, image: 'https://w0.peakpx.com/wallpaper/932/801/HD-wallpaper-goku-ultra-instinct-dragonball-super-son-goku-ultra-instinct-goku-power.jpg' },
    { id: uuid(), name: 'Vegeta', power: 7500, image: 'https://wallpapers.com/images/high/vegeta-pictures-hykimkwn767tu92d.webp' },
    { id: uuid(), name: 'Krillin', power: 500, image: 'https://w0.peakpx.com/wallpaper/179/907/HD-wallpaper-krillin-cartoon-dragonball.jpg' },
    { id: uuid(), name: 'Gohan', power: 2000 },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((character) => character.id !== id);
  }
}
