import { Component, OnInit } from '@angular/core';
import { WSVentaAPIService } from '../Service/wsventa-api.service';


//MATERTIAL 
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


//OBJECTS
import { Client } from '../Models/Client';
import { Response } from '../Models/response';


//COMPONENTS
import { DialogClientComponent } from '../Dialog/dialogcliente.component';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  public dataSource: any = [];
  public displayedColumns: string[] = ['id', 'nombre'];
  public data: any = [];

  constructor(
    private WSVentaAPI: WSVentaAPIService,
    public dialog: MatDialog 
  ){

  }

  ngOnInit(): void {
    this.getClientes();
  }


  getClientes(){
      this.WSVentaAPI.getClientes().subscribe(response =>{
      this.dataSource = new MatTableDataSource(response.data);
      console.log(response.data); 
    })
  }

  AddNewClient(client: string){
    
    this.data = [
      { nombre: 'Francisco MarquezC' },
    ];

    this.WSVentaAPI.AddClient(this.data).subscribe(response =>{
      console.log(response.data);
    })
    
    //this.getClientes();
  }




  openAddDialog(){
    const dialogRef = this.dialog.open(DialogClientComponent, {
      width: '300'
    });
  }
}
