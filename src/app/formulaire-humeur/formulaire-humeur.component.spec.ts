import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireHumeurComponent } from './formulaire-humeur.component';

describe('FormulaireHumeurComponent', () => {
  let component: FormulaireHumeurComponent;
  let fixture: ComponentFixture<FormulaireHumeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireHumeurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireHumeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
