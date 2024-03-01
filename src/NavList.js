import React from 'react';
import ListItem from './ListItem';

const NavList = ({ menuItems }) => {

  return (
    
    <ul className='nav__ul'>

      {menuItems.map((menuItem) => {

        return (

          <ListItem 
            key={menuItem.id}
            menuObj={menuItem}
          ></ListItem>
          
        )

      })}

    </ul>

  );

};

export default NavList;