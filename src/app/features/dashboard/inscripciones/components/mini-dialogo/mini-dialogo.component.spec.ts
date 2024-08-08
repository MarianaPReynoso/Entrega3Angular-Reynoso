import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniDialogoComponent } from './mini-dialogo.component';

describe('MiniDialogoComponent', () => {
  let component: MiniDialogoComponent;
  let fixture: ComponentFixture<MiniDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
