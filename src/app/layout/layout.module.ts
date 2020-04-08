import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent, AppLayoutHeaderDirective, AppLayoutSidenavRightDirective, AppLayoutSidenavLeftDirective, AppLayoutContentDirective, AppLayoutFooterDirective } from './layout.component';
import { MatToolbarModule, MatSidenavModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  declarations: [
    AppLayoutHeaderDirective,
    AppLayoutSidenavLeftDirective,
    AppLayoutSidenavRightDirective,
    AppLayoutContentDirective,
    AppLayoutFooterDirective,
    AppLayoutComponent
  ],
  exports: [
    AppLayoutHeaderDirective,
    AppLayoutSidenavLeftDirective,
    AppLayoutSidenavRightDirective,
    AppLayoutContentDirective,
    AppLayoutFooterDirective,
    AppLayoutComponent
  ]
})
export class LayoutModule { }