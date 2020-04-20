import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_ORIG: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];





export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'OPCIONES',
    group: true,
  },
  {
    title: 'Busca',
    icon: 'lock-outline',
    children: [
      {
        title: 'Busca Texto',
        link: '/pages/forms/busca',
      },
      {
        title: 'Busca Avanzado',
        link: '/pages/forms/busca',
      }
    ],
  },
  {
    title: 'Sube',
    icon: 'lock-outline',
    children: [
      {
        title: 'Sube link',
        link: '/pages/forms/sube',
      },
      {
        title: 'Sube Dataset',
        link: '/pages/forms/sube',
      }
    ],
  },
  {
    title: 'Analiza',
    icon: 'lock-outline',
    children: [
      {
        title: 'Hierarchical Clustering',
        link: '/pages/forms/analiza',
      },
      {
        title: 'Tree EASE',
        link: '/pages/forms/analiza',
      },
      {
        title: 'HCL Support Trees',
        link: '/pages/forms/analiza',
      },
      {
        title: 'Self Organizing Tree Algoritm',
        link: '/pages/forms/analiza',
      },
      {
        title: 'KMC Support',
        link: '/pages/forms/analiza',
      },
      {
        title: 'QT Cluster',
        link: '/pages/forms/analiza',
      },
      {
        title: 'QT Validation',
        link: '/pages/forms/analiza',
      },
      {
        title: 'Self Organizing Map',
        link: '/pages/forms/analiza',
      },
      {
        title: 'Cluster Validation',
        link: '/pages/forms/analiza',
      },
    ],
  },
  {
    title: 'PERFIL',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
