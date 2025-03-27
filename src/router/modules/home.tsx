import { LayoutIndex } from '@/router/constant';
import { RouteObject } from '@/router/interface';
import Home from '@/views/home';

const homeRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: '首页',
      isMenu: true,
    },
    children: [
      {
        path: '/home',
        element: <Home />,
        meta: {
          requiresAuth: false,
          title: '首页',
          key: 'Home',
          isMenu: true,
        },
      },
    ],
  },
];

export default homeRouter;
