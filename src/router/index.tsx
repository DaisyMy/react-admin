import { Navigate, useRoutes } from 'react-router-dom';
import { RouteObject } from './interface';
import Login from '@/views/login';

export const routerArray: RouteObject[] = [];
// * 导入所有router
const metaRouters = import.meta.glob("./modules/*.tsx");
// * 处理路由
Object.keys(metaRouters).forEach(item => {
	console.log(item,'========', metaRouters[item]);
	
	Object.keys(metaRouters[item]).forEach((key: any) => {
		console.log(key,'=======');
		// routerArray.push(...metaRouters[item][key]);
	});
});

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />,
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
