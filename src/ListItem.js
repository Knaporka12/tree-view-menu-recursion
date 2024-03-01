import React from 'react'
import NavList from './NavList'
import DataContext from './Context/DataContext';
import { useContext } from 'react';

const ListItem = ({menuObj}) => {

  const {visibleChildren, setVisibleChildren} = useContext(DataContext); 

  // const iterateObj = (obj) => {

  //   let count = 0;

  //   return (
      
  //     Object.entries(obj).map(([key, value]) => {
  //       console.log(key)

  //       if (typeof value === 'object' || Array.isArray(value)){

  //         count++;

  //         return (
  //           <li className='nav__li' key={`${obj.id} - ${obj.title}`}>

  //             {obj.title}

  //             <ul className='nav__ul'>
  //               {iterateObj(value)}
  //             </ul>

  //           </li>
  //         )
  //       } 

  //       return (
  //         <li className='nav__li' key={`${obj.id} - ${obj.title}`}>
  //           {obj.title}
  //         </li>
  //       )
        

  //     })
  //   )   

  // }

  const handleClick = (id) => {
    setVisibleChildren({...visibleChildren, [id]: !visibleChildren[id]})
  }
  
  return (

    <li className='nav__li'> 

      {menuObj.title}

      {(menuObj.children && menuObj.children.length > 0) && 

        <span onClick={() => {handleClick(menuObj.id)}}>

         {visibleChildren[menuObj.id] === true ? <>-</> : <>+</>}

        </span>

      }
      
      {(menuObj.children && menuObj.children.length > 0 && visibleChildren[menuObj.id] === true) &&
       <NavList menuItems={menuObj.children}></NavList>
      }
      
    </li>

  )

}

export default ListItem
