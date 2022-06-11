import Api from './Api'

const auth = async ( token ) => {
    const {data} = await Api.get('/auth',{
        headers:{
           'x-access-token': token
        }
    })
    return data
}

export default auth