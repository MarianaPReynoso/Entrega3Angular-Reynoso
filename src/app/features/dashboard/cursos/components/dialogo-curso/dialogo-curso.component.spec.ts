import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoCursoComponent } from './dialogo-curso.component';

describe('DialogoCursoComponent', () => {
  let component: DialogoCursoComponent;
  let fixture: ComponentFixture<DialogoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogoCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
