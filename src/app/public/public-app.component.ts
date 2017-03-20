import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-public-app',
  templateUrl: './public-app.component.html',
  styleUrls: ['./public-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicAppComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
