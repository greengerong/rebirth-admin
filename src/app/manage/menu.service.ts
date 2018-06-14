import { Injectable } from '@angular/core';
import { AuthorizationService } from 'rebirth-permission';
import { Observable, of } from 'rxjs';

@Injectable()
export class MenuService {
  constructor(private authorizationService: AuthorizationService) {}

  getMenuConfig() {
    // this.authorizationService.getCurrentUser().roles.indexOf('Admin') or ajax
    return this.dummyMenus();
  }

  private dummyMenus() {
    return of({
      menus: [
        {
          link: '/manage/home',
          name: '主页',
          svgClass: 'fa fa-home',
          svgPath: './assets/common/sales.svg',
        },
        {
          link: '/manage/order',
          name: '销售配置',
          svgPath: './assets/common/sales.svg',
          children: [
            {
              link: '/manage/order',
              name: '订单管理',
            },
            {
              link: '/manage/order/list',
              name: '订单列表',
            },
          ],
        },
        {
          link: '/manage/user',
          name: '后市场配置',
          svgPath: './assets/common/after-sales.svg',
          children: [
            {
              link: '/manage/user',
              name: '用户管理',
            },
            {
              link: '/manage/user/list',
              name: '用户列表',
            },
          ],
        },
        {
          link: '/manage/document',
          name: '文档配置',
          svgPath: './assets/common/document.svg',
          children: [],
        },
      ],
    });
  }
}
