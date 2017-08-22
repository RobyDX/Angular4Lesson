export enum Gender {
    Male = 1,
    Female = 2
}

export class Person {
    name: string;
    surname: string;
    gender: Gender;
    constructor(name: string, surname: string, gender: Gender) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
    }
}