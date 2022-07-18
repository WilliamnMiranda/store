import Api from './Api'
const router = '/cart'
const cartServices = {
    post: async(product) => {
        await Api.post(router,{product},{
            headers:{
                "x-access-token" : localStorage.getItem('token')
            }
        });
    },
    getProductById: async(productId) =>{
        const {data} = await Api.get(`${router}/${productId}`)
        return data;
    }
}

export default cartServices