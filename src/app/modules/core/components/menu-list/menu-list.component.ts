import { Component, OnInit, AfterContentInit, QueryList, ContentChildren, HostBinding } from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { MenuListItemComponent } from '../menu-list-item/menu-list-item.component';
import { UP_ARROW, ESCAPE, hasModifierKey, LEFT_ARROW, RIGHT_ARROW, HOME, END, DOWN_ARROW, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit, AfterContentInit {

  _keyManager: FocusKeyManager<MenuListItemComponent>;

  @ContentChildren(MenuListItemComponent) menuItems: QueryList<MenuListItemComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this._keyManager = new FocusKeyManager<MenuListItemComponent>(this.menuItems).withWrap().withHorizontalOrientation('ltr');
  }

  handleKeydown(event: KeyboardEvent) {
    const key = event.key;
    switch (key) {
      case 'ArrowRight':
      case 'ArrowLeft':
      case 'ArrowDown':
      case 'ArrowUp':
        this._keyManager.onKeydown(event);
        break;
      case 'Home':
        this._keyManager.setFirstItemActive();
        event.preventDefault();
        break;
      case 'End':
        this._keyManager.setLastItemActive();
        event.preventDefault();
        break;
      default:
        this._keyManager.onKeydown(event);
    }

  }

  /*handleKeydown(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;

    switch (keyCode) {
      case ESCAPE:
      break;
      case ENTER:
      break;
      case LEFT_ARROW:
      break;
      case RIGHT_ARROW:
      break;
      case HOME:
      case END:
        if (!hasModifierKey(event)) {
          keyCode === HOME ? manager.setFirstItemActive() : manager.setLastItemActive();
          event.preventDefault();
        }
      break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin('keyboard');
        }
        manager.onKeydown(event);
    }
  }*/

}
