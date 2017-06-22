# RebirthAdmin

## 背景

`RebirthAdmin`是一套基于Angular 2，@angular/cli @Rebirth/NG，Bootstrap-saas的后端管理系统。目标在于方便基于Angular 2的项目快速启动，包含完善的目录结构组织、打包构建、权限、http设置等基础设施。

## 需求

* 基于@angular/cli的项目基础构建（分为core、share、feature module）
* 路由、lazyload路由配置
* 登录页面
* 后台菜单功能（顶部状态栏和侧边栏）
* @Rebirth/NG组件的基础设置
* 后台页面的权限设置([rebirth-permission](https://github.com/greengerong/rebirth-permission))
* 后台API调用基础设置（拦截器，base url）；基于[rebirth-http](https://github.com/greengerong/rebirth-http)
* 全局Loading设置，每次API请求都需要显示loading（包装@Rebirth/NG的OverlayService）
* 顶部导航栏退出菜单, Modal退出确认，并清除`rebirth-permission`等用户信息
* 基于Bootstrap-saas的全局SCSS配置，目录结构组织；支持重新bootstrap样式和全局样式扩展
* 基于[rebirth-http](https://github.com/greengerong/rebirth-http)的全局`JWT` token设置
* 基于[rebirth-storage](https://github.com/greengerong/rebirth-storage)的本地存储设置
* 错误提示页面：404 Not Found、500 Error



