import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
    modelsaved: Array<any> = [];
    Save(model: any): number {
        this.modelsaved.push(model);
        return this.modelsaved.length;
    }
}