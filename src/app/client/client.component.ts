import { Component, OnInit } from '@angular/core';
import { WSVentaAPIService } from '../Service/wsventa-api.service';
import { Response } from '../Models/response';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../Models/Client';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  public dataSource: any = [];
  public displayedColumns: string[] = ['id', 'nombre'];

  public data: any = [];

  constructor(private WSVentaAPI: WSVentaAPIService){

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




  onClick(){



    this.getClientes();
  }




}
