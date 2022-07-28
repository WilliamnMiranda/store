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
        return data;
    },
    delete: async(id) => {
        const produto = await Api.delete(`${router}/delete/${id}`,{
            headers:{
                "x-access-token" : token
            }
        })
        return produto
    },
    deleteAll: async() => { 
        const produto = await Api.delete(`${router}/all`,{
            headers:{
                "x-access-token" : token
            }
        })
        return produto
    }
}

export default cartServices