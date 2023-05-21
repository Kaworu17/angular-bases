import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  OnDeleteCharacterById(id: string): void {
    this.dbzService.getOnDeleteById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter;
  }
}
