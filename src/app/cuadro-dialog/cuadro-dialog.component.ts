import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../contenido-dialog/contenido-dialog.component';

@Component({
  selector: 'app-cuadro-dialog',
  templateUrl: './cuadro-dialog.component.html',
  styleUrls: ['./cuadro-dialog.component.css']
})
export class CuadroDialogComponent {
  // name= localStorage.getItem('name');

  constructor(
    public dialogRef: MatDialogRef<CuadroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ){}


  onNoClick(): void {
    this.dialogRef.close();
  }
}

