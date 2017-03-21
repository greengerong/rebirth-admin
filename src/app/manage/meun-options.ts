import { MenuBar } from 'ng4-rebirth-ui';

export const menuBar: MenuBar = {
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
    },
    {
      text: 'Themes',
      icon: 'glyphicon glyphicon-cog',
      children: [
        {
          text: 'Default',
          url: './?theme=Default'
        },
        {
          text: 'Dark',
          url: './?theme=Dark'
        },
        {
          text: 'Cosmo',
          url: './?theme=Cosmo'
        },
        {
          text: 'Paper',
          url: './?theme=Paper'
        },
        {
          text: 'Journal',
          url: './?theme=Journal'
        },
        {
          text: 'Readable',
          url: './?theme=Readable'
        },
        {
          text: 'United',
          url: './?theme=United'
        },
        {
          text: 'Sandstone',
          url: './?theme=Sandstone'
        }
      ]
    }
  ]
};
