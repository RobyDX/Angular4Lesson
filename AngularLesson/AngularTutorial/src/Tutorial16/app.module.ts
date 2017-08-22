import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { SummaryComponent } from "./summary";
import { InfoComponent } from "./info";
import { SkillComponent } from "./skill";
import { ProjectComponent } from "./project";

export const AppRoutes: Routes = [
    { path: "", component: SummaryComponent },
    { path: "summary/:id", component: InfoComponent },
    { path: "skills/:id", component: SkillComponent },
    { path: "projects/:id", component: ProjectComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(AppRoutes)
    ],
    declarations: [
        AppComponent, SummaryComponent, InfoComponent, SkillComponent, ProjectComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }