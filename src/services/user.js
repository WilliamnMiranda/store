import Api from './Api'
const userServices = {
    login : async(params) => {
        const  {data}  = await Api.post('/acess/login',params)
        return data;
    }
}

export default userServices;