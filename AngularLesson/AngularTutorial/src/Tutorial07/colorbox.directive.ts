import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[colorbox]"
})
export class ColorBox {

    constructor(private el: ElementRef) { }

    @HostListener("keyup") onClick(): void {

        var size: number = (this.el.nativeElement as HTMLInputElement).value.length;
        if (size > 15) {
            this.el.nativeElement.style.backgroundColor = "red";
            this.el.nativeElement.style.color = "white";
        } else if (size > 10) {
            this.el.nativeElement.style.backgroundColor = "orange";
            this.el.nativeElement.style.color = "black";
        } else if (size > 5) {
            this.el.nativeElement.style.backgroundColor = "yellow";
            this.el.nativeElement.style.color = "black";
        } else {
            this.el.nativeElement.style.backgroundColor = "green";
            this.el.nativeElement.style.color = "white";
        }

    }

}