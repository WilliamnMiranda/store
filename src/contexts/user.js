import React from 'react'
import UserService from '../services/user';

export const UserContext = React.createContext();

export const UserStore = ({children}) => {
  const [user,setUser] = React.useState();
  const [loading,setLoading] = React.useState(false);
  const login = async (email,password) => {
    setLoading(true);
    const params = {email, password};
    const user = await UserService.login(params);
    setUser(user.user);
    localStorage.setItem('token',user.token);
    setLoading(false);
  }
  return <UserContext.Provider value={{login,user,loading}}>{children}</UserContext.Provider>
}
