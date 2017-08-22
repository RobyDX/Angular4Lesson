import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";

function validateCities(citynames: string[]): any {
    "use strict";
    return (c: FormControl) => {

        for (let i of citynames) {
            if ((c.value as string).toLowerCase() == i) {
                return null;
            }
        }

        return {
            validateCities: {
                valid: false
            }
        };
    };
}




@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html"
})
export class AppComponent implements OnInit {
    emailRegex = "[a-zA-Z0-9]+@[a-zA-Z0-9]+";

    civicoRegex = "[0-9]*";
    myform: FormGroup;

    constructor(private fb: FormBuilder) {

    }

    ngOnInit(): void {
        this.myform = this.fb.group(
            {
                name: ["", Validators.required],
                surname: ["", Validators.required],
                email: ["", [Validators.required, Validators.pattern(this.emailRegex)]],
                address: this.fb.group({
                    street: ["", <any>Validators.required],
                    number: ["", [<any>Validators.required, <any>Validators.pattern(this.civicoRegex)]],
                    city: ["", [Validators.required, validateCities(["rome", "new york", "paris"])]]
                })
            });
    }


    save(): void {
        alert("Done");
    }
}