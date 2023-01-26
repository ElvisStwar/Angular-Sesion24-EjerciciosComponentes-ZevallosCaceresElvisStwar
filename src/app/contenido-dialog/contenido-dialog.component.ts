import { Component, Inject} from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CuadroDialogComponent } from '../cuadro-dialog/cuadro-dialog.component';


export interface DialogData {
  name:string;
  animal:string;
}

@Component({
  selector: 'app-contenido-dialog',
  templateUrl: './contenido-dialog.component.html',
  styleUrls: ['./contenido-dialog.component.css']
})
export class ContenidoDialogComponent {
  names!:string
  animals!:string
  constructor(public dialog:MatDialog){}
    abrirDialog(){
      const dialogRef=this.dialog.open(CuadroDialogComponent,{
        width:"250px",
        data: {name:this.names,animal:this.animals},
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animals = result;
      });
    }

}
