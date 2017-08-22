import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { Router, NavigationEnd } from "@angular/router";


@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    providers: [AppService]
})
export class AppComponent {
    currentIndex: number = 0;
    showselect: boolean = false;

    constructor(private service: AppService, private router: Router) {
        router.events.forEach((event) => {
            if (event instanceof NavigationEnd) {
                this.showselect = (event as NavigationEnd).url == '/';
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });

    }

    change(): void {
        this.router.navigate(['/']);
    }
}

