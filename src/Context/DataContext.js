import { useState, createContext } from "react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {

    const menuItems  = [
    {
      id: 1,
      title: 'Home'
    },
    {
      id: 2,
      title: 'Profile',
      children : [{
        id: 3,
        title: 'Details',
        children: [{
          id: 4,
          title: 'Location',
          children : [{
            id: 5,
            title: 'City',
          }]
        }]
      }]
    },
    {
      id: 6,
      title: 'Settings',
      children: [
        {
          id: 7,
          title: 'Account'
        },
        {
          id: 8,
          title: 'Security',
          children: [
            {
              id: 9,
              title: 'Login',
            },
            {
              id: 10,
              title: 'Register',
              children: [{
                id: 11,
                title: 'Random data'
              }]
            }
          ]
        }
      ]
    },
  ];

  const [visibleChildren, setVisibleChildren] = useState({})

  return (
    <DataContext.Provider value = {{
        menuItems,
        visibleChildren,
        setVisibleChildren
    }}
    >{children}
    </DataContext.Provider>
  )
}

export default DataContext;