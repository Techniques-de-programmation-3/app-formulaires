import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-formulaire-humeur',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './formulaire-humeur.component.html',
  styleUrl: './formulaire-humeur.component.css'
})
export class FormulaireHumeurComponent {
  
}