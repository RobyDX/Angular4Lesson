import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Person } from "./Person";

@Component({
    selector: "tablerow",
    templateUrl: "tablerow.component.html",
})
export class TableRowComponent {
    @Input() datarow: Person;
    @Output() delete: EventEmitter<any> = new EventEmitter();

    Delete(): void {
        this.delete.emit(this.datarow);
    }
}