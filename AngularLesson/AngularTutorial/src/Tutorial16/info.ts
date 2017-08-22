import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: "my-app",
    templateUrl: "info.html",
    providers: [AppService]
})
export class InfoComponent implements OnInit {
    current: any = {};
    constructor(private service: AppService, private route: ActivatedRoute) {

    }

    ngOnInit(): any {

        var key: string = "id";
        var id: number = this.route.snapshot.params[key] as number;
        this.current = this.service.GetUserByID(id);
    }
}
