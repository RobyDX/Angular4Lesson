import { Injectable } from "@angular/core";

export class User {
    Name: string;
    Surname: string;
    Phone: string;
    Email: string;

    Skills: Skill[] = [];
    Projects: Project[] = [];
}

export class Skill {
    Title: string;
    Level: number;
}

export class Project {
    Name: string;
}

@Injectable()
export class AppService {

    users: User[] =
    [{
        Name: "Mark",
        Surname: "Black",
        Phone: "333123",
        Email: "mark.black@fake.it",
        Skills: [
            {
                Level: 10,
                Title: ".Net"
            },
            {
                Level: 7,
                Title: "Javascript"
            }],
        Projects: [{ Name: "ProjectA" }, { Name: "ProjectB" }]
    },
    {
        Name: "Susan",
        Surname: "White",
        Phone: "333456",
        Email: "susan.white@fake.it",
        Skills: [
            {
                Level: 8,
                Title: "Java"
            },
            {
                Level: 9,
                Title: "Css"
            }],
        Projects: [{ Name: "ProjectA" }, { Name: "ProjectC" }]
    },
    {
        Name: "Peter",
        Surname: "Green",
        Phone: "333789",
        Email: "peter.green@fake.it",
        Skills: [
            {
                Level: 10,
                Title: ".Net"
            },
            {
                Level: 6,
                Title: "Javascript"
            },
            {
                Level: 8,
                Title: "C++"
            }],
        Projects: [{ Name: "ProjectC" }, { Name: "ProjectD" }]
    }] as User[];

    constructor() {

    }

    GetUserByID(id: number): User {
        return this.users[id];
    }
}