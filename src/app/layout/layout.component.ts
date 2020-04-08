import {
    ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { ThemePalette } from '@angular/material';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'ng-template[app-layout-header]'
})
export class AppLayoutHeaderDirective implements Partial<MatToolbar> {
  @Input() color: ThemePalette;
  constructor(public templateRef: TemplateRef<AppLayoutHeaderDirective>) { }
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'ng-template[app-layout-sidenav-left]',
  exportAs: 'appLayoutSidenavLeft'
})
export class AppLayoutSidenavLeftDirective {
  @Input() sidenavConfig: Partial<MatSidenav> = {};

  constructor(
    public templateRef: TemplateRef<AppLayoutSidenavLeftDirective>
  ) {
  }
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'ng-template[app-layout-sidenav-right]'
})
export class AppLayoutSidenavRightDirective {
  @Input() sidenavConfig: Partial<MatSidenav> = {};

  constructor(
    public templateRef: TemplateRef<AppLayoutSidenavRightDirective>
  ) { }
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'ng-template[app-layout-content]'
})
export class AppLayoutContentDirective {
  constructor(public templateRef: TemplateRef<AppLayoutContentDirective>) { }
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'ng-template[app-layout-footer]'
})
export class AppLayoutFooterDirective implements Partial<MatToolbar> {
  @Input() color: ThemePalette;
  constructor(public templateRef: TemplateRef<AppLayoutFooterDirective>) { }
}

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutComponent {
  @ContentChild(AppLayoutHeaderDirective) header: AppLayoutHeaderDirective;
  @ContentChild(AppLayoutSidenavLeftDirective) sidenavLeft: AppLayoutSidenavLeftDirective;
  @ContentChild(AppLayoutSidenavRightDirective) sidenavRight: AppLayoutSidenavRightDirective;
  @ContentChild(AppLayoutContentDirective) content: AppLayoutContentDirective;
  @ContentChild(AppLayoutFooterDirective) footer: AppLayoutFooterDirective;

  @ViewChild('matToolBarHeader') matToolBarHeader: MatToolbar;
  @ViewChild('matSidenavLeft') matSidenavLeft: MatSidenav;
  @ViewChild('matSidenavRight') matSidenavRight: MatSidenav;
  @ViewChild('matSidenavContent') matSidenavContent: MatSidenavContent;
  @ViewChild('matToolBarFooter') matToolBarFooter: MatToolbar;

  get context() {
    return {
      $implicit: {
        matToolBarHeader: this.matToolBarHeader,
        matSidenavLeft: this.matSidenavLeft,
        matSidenavRight: this.matSidenavRight,
        matSidenavContent: this.matSidenavContent,
        matToolBarFooter: this.matToolBarFooter
      }
    };
  }
}
