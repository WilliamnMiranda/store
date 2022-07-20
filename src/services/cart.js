import Api from './Api'
const router = '/cart'
const token = localStorage.getItem('token')
const cartServices = {
    post: async(product) => {
        const produto = await Api.post(router,{product},{
            headers:{
                "x-access-token" : token
            }
        });
        console.log(produto)
    },
    get: async() => {
        const { data } = await Api.get(router,{
            headers:{
                "x-access-token" : token
            }
        })
        console.log(data)
        return data;
    }
}

export default cartServices