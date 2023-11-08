import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Concept } from "src/app/Models/Concept";
import { Sale } from "src/app/Models/Sale";
import { ApisaleService } from "src/app/Service/apisale.service";

@Component({
    templateUrl: 'dialogSale.component.html'
})

export class DialogSaleComponent{

public sale: Sale | undefined;
public concepts: Concept[];
//public concept: Concept = { IdProduct: 56, UnitPrice: 100, Import: 100, Quantity: 2};

public conceptForm = this.formBuilder.group({
    Quantity: [0, Validators.required],
    Import: [0, Validators.required],
    UnitPrice: [0, Validators.required],
    IdProduct: [1, Validators.required]
})



constructor(
    public dialogRef: MatDialogRef<DialogSaleComponent>,
    public snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    public apiSale: ApisaleService)
{
    this.concepts = [];
    this.sale = { IdClient: 56, Concept: []};
}


close(){
    this.dialogRef.close();
}


addConcept(){
    this.concepts.map(x => this.conceptForm.value);
    //this.values.map(x => this.formBuilder.control(x))
}


addVenta(){    
    
}

}