import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as Immutable from 'immutable';
import { menuBar } from './meun-options';

@Component({
  selector: 'app-public-app',
  templateUrl: './manage-app.component.html',
  styleUrls: ['./manage-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageAppComponent implements OnInit {
  menus = menuBar;

  constructor() {
  }

  ngOnInit() {
  }

}
