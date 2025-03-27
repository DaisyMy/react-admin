import React, { useState } from 'react';
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
      const { key, title } = item.meta;
      result.push(getItem(title, key, null, children));
    }
  });
  return result;
};

const LeftMenu = () => {
  console.log('result', getMenuRoute(routerArray));
  const menuList = getMenuRoute(routerArray);
  return (
    <div className="menu">
      <Spin spinning={false} tip="Loading...">
        <Menu theme="dark" mode="inline" triggerSubMenuAction="click" items={menuList}></Menu>
      </Spin>
    </div>
  );
};

export default LeftMenu;
