import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-formulaire-humeur',
  standalone: true,
  imports: [MatSliderModule, FormsModule],
  templateUrl: './formulaire-humeur.component.html',
  styleUrl: './formulaire-humeur.component.css'
})
export class FormulaireHumeurComponent {
  indiceHumeur = 0;
}
