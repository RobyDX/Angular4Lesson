import { Pipe, PipeTransform } from "@angular/core";
import { Person, Gender } from "./person";

@Pipe(
    {
        name: "userpipe",
        pure: false,
    })
export class UserPipe implements PipeTransform {
    transform(value: Person, args: string): any {

        if (!value) { return value; };

        if (args === "am") {
            if (value.gender == Gender.Male) {
                return "Good Morning Mr " + value.name + " " + value.surname;
            } else {
                return "Good Morning Miss " + value.name + " " + value.surname;
            }
        } else {
            if (value.gender == Gender.Male) {
                return "Good Evening Mr " + value.name + " " + value.surname;
            } else {
                return "Good Evening Miss " + value.name + " " + value.surname;
            }
        }
    }
}