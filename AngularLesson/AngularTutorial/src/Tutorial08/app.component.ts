import { Component } from "@angular/core";


@Component({
    selector: "my-app",
    templateUrl: "appComponent.html"
})
export class AppComponent {
    date: Date = new Date(1980, 1 / 17);
    money: number = 0;
    numbers: number = 0;
    options: { [k: string]: string } = { "=0": "No Item", "=1": "One Item", "other": "# Items" };
}