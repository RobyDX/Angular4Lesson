import { Component } from "@angular/core";
export class Persona {
    nome: string = "";
    cognome: string = "";
}

@Component({
    selector: "my-app",
    templateUrl: "appComponent.html"
})
export class AppComponent {
    text: string = "";
}