import React from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const DropdownComponent = ({ items, handleDropdown ,index}) => {
  const menu = (
    <Menu>
      {items?.map((item,i) => (
        <Menu.Item key={item.value} onClick={() => handleDropdown(item.value,index)}>
            {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <BiDotsVerticalRounded />
    </Dropdown>
  );
};

export default DropdownComponent;
