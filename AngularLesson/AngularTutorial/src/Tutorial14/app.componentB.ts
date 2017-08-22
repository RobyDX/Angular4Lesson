import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AppService } from "./app.service";

@Component({
    selector: "[compB]",
    templateUrl: "appComponentB.html",
})
export class AppComponentB implements OnInit {

    myform: FormGroup;
    items: Array<any> = [];

    constructor(private fb: FormBuilder, private service: AppService) {

    }

    ngOnInit(): any {
        this.items = this.service.modelsaved;
    }
}