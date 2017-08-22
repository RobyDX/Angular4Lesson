import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AppService } from "./app.service";

@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html"
})
export class AppComponent implements OnInit {
    myform: FormGroup;

    constructor(private fb: FormBuilder, private service: AppService) {

    }

    ngOnInit(): any {
        this.myform = this.fb.group(
            {
                "name": ["", Validators.required],
                "surname": ["", Validators.required],
            });
    }


    save(): void {
        this.service.Save(this.myform.value);
    }
}