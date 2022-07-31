import Api from './Api'
const router = '/orders'
const token = localStorage.getItem('token')
const orderServices = {
    post: async(products) => {
        const order = await Api.post(router,{products},{
            headers:{
                "x-access-token" : token
            }
        });
    },
    get: async() => {
        const { data } = await Api.get(router,{
            headers:{
                "x-access-token" : token
            }
        })
        return data;
    },
}

export default orderServices