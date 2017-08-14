import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-app',
  templateUrl: './manage-app.component.html',
  styleUrls: ['./manage-app.component.scss']
})
export class ManageAppComponent {
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
          link: '',
          name: '销售配置',
          isNotActive: true,
          canCollapse: true,
          svgPath: '/assets/common/sales.svg',
          children: [
            {
              link: '',
              name: '厂家商务政策'
            },
            {
              link: '',
              name: '服务费用管理'
            }
          ]
        },
        {
          link: '',
          name: '后市场配置',
          isNotActive: true,
          canCollapse: true,
          svgPath: '/assets/common/after-sales.svg',
          children: [
            {
              link: '',
              name: '精品和配件'
            },
            {
              link: '',
              name: '精品和配件'
            }
          ]
        },
        {
          link: '',
          name: '文档配置',
          svgPath: '/assets/common/document.svg',
          children: []
        }
      ]
    }
  ];
}
