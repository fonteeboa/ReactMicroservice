import React from 'react';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuItems } from '../../constants/sidebarData';
import { MenuItem, SubMenuItem } from '../../types/MenuItem';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useTranslation } from 'react-i18next';

const { SubMenu } = Menu;

function renderSubMenu(subMenu: SubMenuItem[], t: any) {
  return subMenu.map((item) => {
    if (item.subMenu && item.subMenu.length > 0) {
      return (
        <SubMenu
          key={item.label}
          title={t(item.label)}
          icon={
            item.icon ? (
              typeof item.icon === 'string' ? (
                <i className={item.icon}></i>
              ) : (
                <FontAwesomeIcon icon={item.icon as IconProp} />
              )
            ) : null
          }
        >
          {renderSubMenu(item.subMenu, t)}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.label} icon={item.icon ? <FontAwesomeIcon icon={item.icon as IconProp} /> : null}>
          {t(item.label)}
        </Menu.Item>
      );
    }
  });
}

function renderMenuItem(item: MenuItem, t: any) {
  if (item.subMenu && item.subMenu.length > 0) {
    return (
      <SubMenu
        key={item.label}
        title={t(item.label)}
        icon={
          item.icon ? (
            typeof item.icon === 'string' ? (
              <i className={item.icon}></i>
            ) : (
              <FontAwesomeIcon icon={item.icon as IconProp} />
            )
          ) : null
        }
      >
        {renderSubMenu(item.subMenu, t)}
      </SubMenu>
    );
  } else {
    return (
      <Menu.Item key={item.label} icon={item.icon ? <FontAwesomeIcon icon={item.icon as IconProp} /> : null}>
        {t(item.label)}
      </Menu.Item>
    );
  }
}

const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Menu
      className='Menu'
      defaultSelectedKeys={['common.dashboard']}
      defaultOpenKeys={['common.dashboard']}
      mode="inline"
    >
      {menuItems.map(item => renderMenuItem(item, t))}
    </Menu>
  );
};

export default Sidebar;
