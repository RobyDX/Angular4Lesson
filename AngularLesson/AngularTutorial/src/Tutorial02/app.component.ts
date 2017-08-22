import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: "<h1>Data Binding</h1><div class='form-group'>" +
    "<p><input [(ngModel)]='text' placeholder='Insert Text' class='form-control' /></p>" +
    "<p>Text: {{text}}</p>" +
    "<p>Length: {{GetLength()}}</p>" +
    "<p><button (click)='ClearData()' class='btn'>Clear</button></p>" +
    "</div>"
})
export class AppComponent {

    text: string = "";
    GetLength(): number {
        return this.text.length;
    }

    ClearData(): void {
        this.text = "";
    }
}