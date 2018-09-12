import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatSliderModule,
   MatCardModule, MatProgressBarModule, MatSlideToggleModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatFormFieldModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatSliderModule,
  HttpModule,
  MatCardModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  FormsModule
];

@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules
  ],
  declarations: []
})
export class SharedModule { }
