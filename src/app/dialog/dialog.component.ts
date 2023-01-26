import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 5', cols: 1, rows: 1 },
          { title: 'Card 6', cols: 1, rows: 1 },
          { title: 'Card 7', cols: 1, rows: 1 },
          { title: 'Card 8', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 5', cols: 2, rows: 1 },
        { title: 'Card 6', cols: 1, rows: 1 },
        { title: 'Card 7', cols: 1, rows: 2 },
        { title: 'Card 8', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  
}
