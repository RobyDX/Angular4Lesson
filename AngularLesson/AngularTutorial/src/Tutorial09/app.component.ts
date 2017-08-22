import { Component } from "@angular/core";
import { Person, Gender } from "./person";

@Component({
    selector: "my-app",
    templateUrl: "appComponent.html"
})
export class AppComponent {
    user: Person = new Person("Roberto", "Nacchia", Gender.Male);
    options: Array<any> = new Array<any>();

    constructor() {
        this.options.push({ value: Gender.Male, text: "Male" });
        this.options.push({ value: Gender.Female, text: "Female" });
    }

}