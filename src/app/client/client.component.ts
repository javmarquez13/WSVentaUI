import { Component, OnInit } from '@angular/core';
import { apiclient } from '../Service/apiclient.service';


//MATERTIAL 
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


//OBJECTS
import { Client } from '../Models/Client';
import { Response } from '../Models/response';


//COMPONENTS
import { DialogClientComponent } from './Dialog/dialogcliente.component';
import { DialogDeleteComponent } from '../Common/Delete/dialogdelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiAuthService } from '../Service/apiauth.service';
import { User } from '../Models/User';




@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  public _dataSource: any = [];
  public _displayedColumns: string[] = ['id', 'name', 'actions'];
  public _data: any = [];

  public user: User | undefined;

  readonly _with: string = '300px';

  constructor(
    private apiClient: apiclient,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public apiAuth: ApiAuthService
  ){

    this.apiAuth.User.subscribe(res =>{
      this.user = res;
      console.log(`Debugging ${res}`);
    })
  }

  ngOnInit(): void {
    this.getClientes();
  }


  getClientes(){
      this.apiClient.getClientes().subscribe(response =>{
      this._dataSource = new MatTableDataSource(response.data);
      console.log(response.data); 
    })
  }

  AddDialog(){
    const dialogRef = this.dialog.open(DialogClientComponent, {
      width: this._with
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.getClientes();
    });
  }


  EditDialog(obj: Client){
    const dialogRef = this.dialog.open(DialogClientComponent, {
      width: this._with, 
      data: obj
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.getClientes();
    });
  }


  DeleteDialog(obj: Client){
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: this._with, 
      data: obj
    });

    dialogRef.afterClosed().subscribe(result =>{
      
      if(result){
        this.apiClient.Delete(obj.id).subscribe(response =>{
          if(response.sucess = true){
            this.snackBar.open(`${obj.name} was deleted successfully`, '', {
              duration: 2000
            })
            this.getClientes();
          }
        })
      }

    });
  }
}
