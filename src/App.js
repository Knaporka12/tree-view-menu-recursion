import { useState } from 'react';
import logo from './logo.svg';
import NavList from './NavList';
import DataContext from './Context/DataContext';
import { useContext } from 'react';


function App() {

  const {menuItems} = useContext(DataContext);


  // const iterateArray = () => {
    
  //   menuItems.map((item) => {
  //     return iterateObj(item);
  //   })

  // }

  // const iterateObj = (getObj) => {

  //   Object.entries(getObj).map(([key, value]) => {

  //     if (typeof value === 'object' || Array.isArray(value)){

  //       return iterateObj(value);

  //     }

  //     console.log(`${getObj.id} ${getObj.title}`)

  //   })

  // }

  // console.log(iterateArray());


  return (

    <div className="App">

      <header className="header">

        <img src={logo} className="header__logo" alt="logo" />
        <h1 className='header__h1'>Recursive nav menu</h1>
        
      </header>

     <nav className='nav'>

        <NavList menuItems={menuItems}></NavList>
        
     </nav>

    </div>

  );

}

export default App;
