import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: "<h1>Hello World</h1><h3>{{text}}</h3><button (click)='RefreshData()'>Update</button>"
})
export class AppComponent {

    text: string = "Click To Update";

    RefreshData(): void {
        this.text = "Current Time is: " + new Date().toLocaleTimeString("it-IT");
    }
}