import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-formulaire-inscription',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  providers: [],
  templateUrl: './formulaire-inscription.component.html',
  styleUrl: './formulaire-inscription.component.css'
})
export class FormulaireInscriptionComponent {

}
