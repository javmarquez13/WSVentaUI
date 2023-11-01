import { Component } from '@angular/core';

//Service
import { WSVentaAPIService } from '../Service/wsventa-api.service';


//Material 
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';


//Objects
import { Client } from '../Models/Client';
import { Response } from '../Models/response';

@Component({
    templateUrl: 'dialogcliente.component.html'
})

export class DialogClientComponent{

    constructor(
        public dialogRef: MatDialogRef<DialogClientComponent>,
        public wsVentaApi: WSVentaAPIService,
        public snackBar: MatSnackBar,

    ) {}


    close(){
        this.dialogRef.close();
    }

    addClient(){

        const client: Client = { nombre: 'patito'};
        this.wsVentaApi.AddClient(client).subscribe(response =>{
            console.log(response.data);
            if(response.sucess == true){
                this.close();
                this.snackBar.open('Client registered sucessfully', '', { 
                    duration: 2000 
                });
            }
        })
        
    }

}