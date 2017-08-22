import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html"
})
export class AppComponent {
    text1: string;
    text2: string;

    Test(): void
    {
        alert("Parameters are valid");
    }
}