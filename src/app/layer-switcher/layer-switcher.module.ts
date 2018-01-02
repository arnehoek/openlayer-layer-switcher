import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayerSwitcherComponent} from './layer-switcher.component';
import {MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  declarations: [
    LayerSwitcherComponent
  ],
  exports: [
    LayerSwitcherComponent
  ]
})
export class LayerSwitcherModule { }
