import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-public-app',
  templateUrl: './manage-app.component.html',
  styleUrls: ['./manage-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageAppComponent implements OnInit {
  menus = {
    logo: 'http://greengerong.com/rebirth/assets/img/wolf2.png',
    title: '破狼博客',
    home: './',
    menus: [
      {
        text: '@Rebirth/UI',
        router: ['./'],
        icon: 'glyphicon glyphicon-home'
      },
      {
        text: 'Components',
        children: [],
        icon: 'glyphicon glyphicon-fire'
      },
      {
        text: 'API Docs',
        url: '/ng2-rebirth-ui/compodocs/overview.html',
        target: '_blank',
        icon: 'glyphicon glyphicon-heart'
      },
      {
        text: '@Github',
        url: 'https://github.com/greengerong/ng2-rebirth-ui',
        target: '_blank',
        icon: 'glyphicon glyphicon-user'
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
