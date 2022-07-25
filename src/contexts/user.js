import React from 'react'
import UserService from '../services/user';
import auth from '../services/auth'
export const UserContext = React.createContext();

export const UserStore = ({children}) => {
  const token = localStorage.getItem('token');
  const [user,setUser] = React.useState();
  const [loading,setLoading] = React.useState(false);
  const [error,setError] = React.useState('')
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
    if(email === '' && password === '') {
      setLoading(false);
      return setError('Digite seus dados')
    }
    const params = {email, password};
    const user = await UserService.login(params);
    if(user){
      setUser(user.user);
      localStorage.setItem('token',user.token);
      setLoading(false);
    }
    else{
      console.log('entrei no else')
      setLoading(false);
      return setError('login ou senha incorretos')
    }
  }

  const register = async (dados) => {
    setLoading(true);
    const user = await UserService.register(dados);
    setUser(user.user);
    localStorage.setItem('token',user.token);
    setLoading(false);
  }
  return <UserContext.Provider value={{login,error,user,loading,register}}>{children}</UserContext.Provider>
}
