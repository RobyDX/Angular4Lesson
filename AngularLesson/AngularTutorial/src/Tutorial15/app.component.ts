import { Component } from "@angular/core";
import { AppService } from "./app.service";
import { Response } from "@angular/http";
import { Country } from './country';

@Component({
    selector: "my-app",
    templateUrl: "appComponent.html",
    providers: [AppService]
})
export class AppComponent {
    countries: Country[] = [];

    constructor(private service: AppService) {

    } 

    Refresh(): void {
        this.service.Refresh().then(res =>
            this.countries = res
        );
    }
}