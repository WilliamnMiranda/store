import React from 'react'

export const DrawerContext = React.createContext();

export const DrawerStore = ({children}) => {
  const [statusMenu,setStatusMenu] = React.useState();
  

  return <DrawerContext.Provider value={{statusMenu,setStatusMenu}}>{children}</DrawerContext.Provider>
}
