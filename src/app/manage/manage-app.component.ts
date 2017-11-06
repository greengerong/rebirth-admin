import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-app',
  templateUrl: './manage-app.component.html',
  styleUrls: ['./manage-app.component.scss']
})
export class ManageAppComponent implements OnInit {
  menus = {
    logo: '/assets/icon/favicon-96x96.png',
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

  menuConfig = [
    {
      role: 'Admin',
      data: [
        {
          link: '/manage',
          name: '主页',
          svgClass: 'fa fa-home',
          svgPath: '/assets/common/sales.svg',
        },
        {
          link: '/manage/order',
          name: '销售配置',
          isNotActive: true,
          canCollapse: true,
          svgPath: '/assets/common/sales.svg',
          children: [
            {
              link: '/manage/order',
              name: '订单管理'
            },
            {
              link: '/manage/order/list',
              name: '订单列表'
            }
          ]
        },
        {
          link: '/manage/user',
          name: '后市场配置',
          isNotActive: true,
          canCollapse: true,
          svgPath: '/assets/common/after-sales.svg',
          children: [
            {
              link: '/manage/user',
              name: '用户管理'
            },
            {
              link: '/manage/user/list',
              name: '用户列表'
            }
          ]
        },
        {
          link: '/manage/document',
          name: '文档配置',
          svgPath: '/assets/common/document.svg',
          children: []
        }
      ]
    }
  ];

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.navigateByUrl('/manage/user');
  }


}
