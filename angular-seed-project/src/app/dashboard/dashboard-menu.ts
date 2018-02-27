import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  { 
    title: 'Dashboard', 
    icon: 'nb-home', 
    link: '/user/dashboard', 
    home: true 
  },
  {
    title: 'Store',
    icon: 'fa fa-shopping-basket',
    link: '/user/store/products'
  },
  {
    title: 'Cart',
    icon: '',
    link: '/user/store/cart'
  }
];
