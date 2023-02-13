import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasEventosEnlacesComponent } from './listas-eventos-enlaces.component';

describe('ListasEventosEnlacesComponent', () => {
  let component: ListasEventosEnlacesComponent;
  let fixture: ComponentFixture<ListasEventosEnlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasEventosEnlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasEventosEnlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
