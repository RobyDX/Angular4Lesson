import { Component } from "@angular/core";

export class Person {
    name: string = "";
    surname: string = "";
}

@Component({
    selector: "my-app",
    templateUrl: "appComponent.html"
})
export class AppComponent {
    current: Person = new Person();
    items: Person[] = [];

    Add(): void {
        if (this.current.name.length > 0 && this.current.surname.length > 0) {
            this.items.push(this.current);
            this.current = new Person();
        } else {
            alert("You must fill all fields");
        }
    }
}