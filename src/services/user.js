import Api from './Api'
const userServices = {
    login : async(params) => {
        try{
            const  {data}  = await Api.post('/acess/login',params)
            console.log('cai no try')
            return data 
        }catch(e){
            return false
        }
    },
    register : async(params) => {
        const  {data}  = await Api.post('/acess/register',params)
        return data;
    }
}

export default userServices;