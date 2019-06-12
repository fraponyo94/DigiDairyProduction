import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ErrorDialogComponent,SuccessDialogComponent } from './index';
import { LogOutIconSVGComponent } from './navbar/log-out-icon-svg/log-out-icon-svg.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    SuccessDialogComponent,
    ErrorDialogComponent
  ],
  declarations: [
    SuccessDialogComponent, 
    ErrorDialogComponent, LogOutIconSVGComponent,
   

  ],
  entryComponents: [
    SuccessDialogComponent,
    ErrorDialogComponent
  ]
})
export class SharedModule { }
