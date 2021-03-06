﻿import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AppService } from "./app.service";

@Component({
    selector: "my-app",
    templateUrl: "appComponent.html",
    providers: [AppService]
})
export class AppComponent implements OnInit {
    emailRegex = "[a-zA-Z0-9]+@[a-zA-Z0-9]+";

    civicoRegex = "[0-9]*";
    myform: FormGroup;

    constructor(private fb: FormBuilder, private service: AppService) {

    }

    ngOnInit(): void {
        this.myform = this.fb.group(
            {
                "name": ["", Validators.required],
                "surname": ["", Validators.required],
                "email": ["", [Validators.required, Validators.pattern(this.emailRegex)]],
                "address": this.fb.group({
                    "street": ["", <any>Validators.required],
                    "number": ["", [<any>Validators.required, <any>Validators.pattern(this.civicoRegex)]],
                })
            });
    }


    save(): void {
        this.service.Save(this.myform.value);
    }
}