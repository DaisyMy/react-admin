import { Navigate, useRoutes } from 'react-router-dom';
import { RouteObject } from './interface';
import Login from '@/views/login';

export const routerArray: RouteObject[] = [];
// * 导入所有router
const metaRouters:any = import.meta.glob('./modules/*.tsx', { eager: true });
// * 处理路由
Object.keys(metaRouters).forEach((key) => {
  const route =metaRouters[key]
  routerArray.push(...route.default);
});

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login',
    },
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
