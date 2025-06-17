import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnagesListeComponent } from './personnages-liste.component';

describe('PersonnagesListeComponent', () => {
  let component: PersonnagesListeComponent;
  let fixture: ComponentFixture<PersonnagesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnagesListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnagesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
