export interface MenuItem {
  link: string;
  name: string;
  svgClass?: string;
  svgPath?: string;
  children?: MenuItem[];
}

export interface MenuConfig {
  role: string;
  data: MenuItem[];
}
