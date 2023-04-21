import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { SharedComponent } from './components/shared/shared.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ErrorComponent } from './components/error/error.component';
import { SelectComponent } from './components/select/select.component';




@NgModule({
  declarations: [
    SharedComponent,
    SpinnerComponent,
    ErrorComponent,
    SelectComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    SharedComponent,
    SpinnerComponent,
    ErrorComponent,
    SelectComponent
  ],
})
export class SharedModule { }
