import { Component, OnInit, HostBinding, ElementRef, Input } from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  // template: '<ng-content></ng-content>'
})
export class MenuListItemComponent implements OnInit, FocusableOption {

  // @HostBinding('attr.tabindex') tabindex = -1 ;

  @Input() fragment: string;

  constructor(public host: ElementRef) { }

  ngOnInit(): void {
  }

  focus() {
    // this.host.nativeElement.focus();
    this.host.nativeElement.children[0].children[0].focus(); // to make the focus in the a tag
  }

}
