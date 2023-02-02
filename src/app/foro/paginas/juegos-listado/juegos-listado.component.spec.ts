import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosListadoComponent } from './juegos-listado.component';

describe('JuegosListadoComponent', () => {
  let component: JuegosListadoComponent;
  let fixture: ComponentFixture<JuegosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
