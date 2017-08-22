import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppComponentA } from './app.componentA';
import { AppComponentB } from './app.componentB';
import { AppService } from './app.service'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent, AppComponentA, AppComponentB
    ],
    bootstrap: [AppComponent],
    providers: [AppService]
})
export class AppModule { }