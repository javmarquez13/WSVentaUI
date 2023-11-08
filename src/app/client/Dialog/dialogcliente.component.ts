import { Component, Inject, inject } from '@angular/core';

//Service
import { apiclient } from '../../Service/apiclient.service';


//Material 
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


//Objects
import { Client } from '../../Models/Client';
import { Response } from '../../Models/response';


@Component({
    templateUrl: 'dialogcliente.component.html'
})

export class DialogClientComponent{

    //Variables
    public _name: string = "";


    constructor(
        public dialogRef: MatDialogRef<DialogClientComponent>,
        public apiClient: apiclient,
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public obj: Client
    ) {
        if(this.obj != null){
            this._name = obj.name;
        }
    }


    close(){
        this.dialogRef.close();
    }

    addClient(){

        const client: Client = { id: 0, name: this._name};
        this.apiClient.Add(client).subscribe(response =>{
            console.log(response);
            if(response.sucess = true){
                this.dialogRef.close();
                this.snackBar.open(`${client.name} was registered successfully`, '', { 
                    duration: 2000 
                });
            }
        })      
    }



    editClient(){
        const client: Client = { id: this.obj.id, name: this._name }
        this.apiClient.Edit(client).subscribe(response =>{
            if(response.sucess = true){
                this.dialogRef.close();
                this.snackBar.open(`${client.name} was updated successfully`, '',{
                    duration: 2000
                });
            }
        })
    }

}