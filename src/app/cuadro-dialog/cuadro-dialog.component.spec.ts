import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDialogComponent } from './cuadro-dialog.component';

describe('CuadroDialogComponent', () => {
  let component: CuadroDialogComponent;
  let fixture: ComponentFixture<CuadroDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
