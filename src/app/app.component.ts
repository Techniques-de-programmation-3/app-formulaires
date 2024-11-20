import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormulaireInscriptionComponent } from "./formulaire-inscription/formulaire-inscription.component";
import { FormulaireHumeurComponent } from "./formulaire-humeur/formulaire-humeur.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormulaireInscriptionComponent, FormulaireHumeurComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-formulaires';
}
