import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieCarteComponent } from './saisie-carte.component';

describe('SaisieCarteComponent', () => {
  let component: SaisieCarteComponent;
  let fixture: ComponentFixture<SaisieCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaisieCarteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaisieCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
