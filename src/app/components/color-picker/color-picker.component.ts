import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit, AfterViewInit, OnDestroy {

  public red: number;
  public green: number;
  public blue: number;
  public colorFlag: string;
  public _exampleGetterSetter: number;
  public welcome: string;

  constructor(public colorService: ColorService) { }

  ngOnInit() {
    this.red = this.colorService.redColor;
    this.green = this.colorService.greenColor;
    this.blue = this.colorService.blueColor;

    const prenom = 'Baptiste';
    this.welcome = `Je m'appelle ${prenom}`;
    this.rgbToHex();
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  valuechange(event: any) { // without type info
    this.rgbToHex();
  }

  public componentToHex(c): string {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  public rgbToHex() {
    this.colorFlag =  '#' + this.componentToHex(this.red) + this.componentToHex(this.green) + this.componentToHex(this.blue);
  }

  // Exemple de getter et setter
  public get exampleGetterSetter(): number {
    return this._exampleGetterSetter;
  }
  public set exampleGetterSetter(test: number) {
    this._exampleGetterSetter = test;
  }

}
