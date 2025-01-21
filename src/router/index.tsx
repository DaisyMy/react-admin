import { createBrowserRouter, Navigate } from 'react-router-dom';

import ErrorPage from '../views/ErrorPage/404';

import Home from '../views/Home';
import Login from '../views/Login';

import Nesting from '../views/Nesting';
import Content from '../views/Nesting/Content';
import About from '../views/Nesting/About';

// createBrowserRouter：history路由（推荐）
// createHashRouter：哈希路由（不推荐）
// createMemoryRouter：有自己的一套路由记忆栈，用于生产开发工具、无浏览器环境使用
// createStaticRouter：用于服务器
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/nesting',
    element: <Nesting />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'content',
        element: <Content />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '*', // 通配符 代表除上面提到的路径，其他都会直接显示errorPage页面
    element: <ErrorPage />,
  },
]);

export default router;
