import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { CreditCard, ArrowLeft,ChevronRight } from 'angular-feather/icons';

const icons = {
  CreditCard,
  ArrowLeft,
  ChevronRight
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }