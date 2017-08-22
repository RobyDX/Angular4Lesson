import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
    selector: "my-app",
    templateUrl: "appComponent.html"
})
export class AppComponent implements OnInit {
    emailRegex = "[a-zA-Z0-9]+@[a-zA-Z0-9]+";
    numberRegex = "[0-9]*";
    myform: FormGroup;

    constructor(private fb: FormBuilder) {

    }

    ngOnInit(): any {
        this.myform = this.fb.group(
            {
                name: ["", Validators.required],
                surname: ["", Validators.required],
                email: ["", [Validators.required, Validators.pattern(this.emailRegex)]],
                address: this.fb.group({
                    street: ["", <any>Validators.required],
                    number: ["", [<any>Validators.required, <any>Validators.pattern(this.numberRegex)]],
                })
            });
    }


    save(): void {
        alert("thank you, " + this.myform.value.name + " " + this.myform.value.surname);
    }
}