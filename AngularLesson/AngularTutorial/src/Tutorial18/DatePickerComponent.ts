import { Component, OnInit, forwardRef, ElementRef, ViewChild } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
declare var $: any;

export const DATE_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true
};


@Component({
    selector: "[picker]",
    template: "<input #dinput [ngModel]=\"_value|date:'dd/MM/yyyy'\" (ngModelChange)='onChange($event)' (blur)='onBlur()' class='form-control' />",
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DatePickerComponent),
        multi: true
    }]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {
    @ViewChild("dinput") el: ElementRef;

    private _value: number;
    private _current: string;

    private onTouchedCallback: () => void = () => { };
    private onChangeCallback: (_: any) => void = () => { };
    onChange(val: string): any {
        this._current = val;
    }

    onBlur(): any {
        var n: number = new Date(this._current).valueOf();
        if (!isNaN(n)) {
            this._value = n;
            this.onChangeCallback(n);
        }
    }

    ngOnInit(): void {
        var t: any = this;
        var input: HTMLInputElement = this.el.nativeElement as HTMLInputElement;
        $(input).datepicker({
            onSelect: function (date: string): void {
                t._current = date;
                t.onBlur();
            }
        });
    }

    writeValue(value: any): void {
        this._value = value;
    }

    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }
}

