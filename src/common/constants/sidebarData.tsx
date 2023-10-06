import {
    faHome,
    faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
  
import { MenuItem } from '../types/MenuItem';

export const menuItems: MenuItem[] = [
  {
    label: 'common.overview',
    icon: faHome,
    subMenu: [
      { label: 'common.dashboard', route: '/', icon: false },
    ],
  },
  {
    label: 'common.socialmedias',
    icon: faShareNodes,
    subMenu: [
      { 
        label: 'author.jv',
        icon: false, 
        external: true, 
        subMenu: [
          { label: 'common.github', route: 'https://github.com/galvao845', icon: false, external: true },
          { label: 'common.linkedin', route: 'https://www.linkedin.com/in/galvao845', icon: false, external: true },
        ]
      },
    ],
  },
];
  