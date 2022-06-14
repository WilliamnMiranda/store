import React from 'react'
import UserService from '../services/user';
import auth from '../services/auth'
export const UserContext = React.createContext();

export const UserStore = ({children}) => {
  const token = localStorage.getItem('token');
  const [user,setUser] = React.useState();
  const [loading,setLoading] = React.useState(false);

  const loggedUser = async () => {
    setLoading(true)
    if(token){
      const user = await auth(token)
      if(user) setUser(user);
      setLoading(false);
    }
    setLoading(false)
  }
  React.useEffect(()=>{
    loggedUser();
  },[])

  const login = async (email,password) => {
    setLoading(true);
    const params = {email, password};
    const user = await UserService.login(params);
    setUser(user.user);
    localStorage.setItem('token',user.token);
    setLoading(false);
  }

  const register = async (dados) => {
    console.log('entrei');
    console.log(dados)
    setLoading(true);
    const user = await UserService.register(dados);
    console.log(user);
    setUser(user.user);
    localStorage.setItem('token',user.token);
    setLoading(false);
  }
  return <UserContext.Provider value={{login,user,loading,register}}>{children}</UserContext.Provider>
}
