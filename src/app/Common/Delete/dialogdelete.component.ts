import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from "src/app/Models/Client";


@Component({
    templateUrl: 'dialogdelete.component.html'
})

export class DialogDeleteComponent{

    public _name: string = "";



    constructor(
        public dialogRef: MatDialogRef<DialogDeleteComponent>,
        @Inject(MAT_DIALOG_DATA) public obj: Client
    )
    {
        if(this.obj != null){
            this._name = obj.name;
        }
    }
}