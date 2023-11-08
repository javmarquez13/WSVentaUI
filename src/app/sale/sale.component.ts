import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogSaleComponent } from './dialog/dialogSale.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  readonly width: string = '600px';

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar)
  
  {

  }

  ngOnInit(): void {
    
  }


  openAdd(){
    const dialogRef = this.dialog.open(DialogSaleComponent,{
      width: this.width
    })
  }


}
