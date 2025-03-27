import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, Spin } from 'antd';
import { routerArray } from '@/router';
import { RouteObject } from '@/router/interface';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
const getItem = (label: React.ReactNode, key?: React.Key | null, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};
const getMenuRoute = (arr: Array<RouteObject>): any => {
  let result: Array<MenuItem> = [];
  arr.forEach((item) => {
    if (item.meta?.isMenu) {
      let children: Array<MenuItem> = [];
      item.children && (children = getMenuRoute(item.children));
      const { title } = item.meta;
      if (item.children?.length) {
        result.push(getItem(title, item.path, null, children));
      } else {
        result.push(getItem(title, item.path, null));
      }
    }
  });
  return result;
};

const LeftMenu = () => {
  console.log('result', getMenuRoute(routerArray));
  const menuList = getMenuRoute(routerArray);
  const searchPath = (key: string, routes: RouteObject[] = []) => {
    let result: RouteObject = {};
    for (let item of routes) {
      if (item.path === key) return item;
      if (item.children) {
        const res = searchPath(key, item.children);
        if (Object.keys(res).length) result = res;
      }
    }
    return result;
  };
  // 点击当前菜单跳转页面
  const navigate = useNavigate();
  const clickMenu: MenuProps['onClick'] = ({ key }: { key: string }) => {
    // console.log(key);

    // console.log(searchPath(key, routerArray));
    navigate(key);
  };
  return (
    <div className="menu">
      <Spin spinning={false} tip="Loading...">
        <Menu theme="dark" mode="inline" triggerSubMenuAction="click" items={menuList} onClick={clickMenu}></Menu>
      </Spin>
    </div>
  );
};

export default LeftMenu;
