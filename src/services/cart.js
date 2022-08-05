import Api from './Api'
const router = '/cart'
const token = localStorage.getItem('token')
const cartServices = {
    post: async(product) => {
        const produto = await Api.post(router,{product},{
            headers:{
                "x-access-token" : localStorage.getItem('token')
            }
        });
        console.log(produto)
    },
    get: async() => {
        const { data } = await Api.get(router,{
            headers:{
                "x-access-token" : localStorage.getItem('token')
            }
        })
        return data;
    },
    patch: async(items) => {
        console.log(items)
        const  {data}  = await Api.patch(router,items,{
            headers:{
                "x-access-token" : localStorage.getItem('token')
            }
        })
        console.log(data)
        return data;
    },
    delete: async(id) => {
        const produto = await Api.delete(`${router}/delete/${id}`,{
            headers:{
                "x-access-token" : localStorage.getItem('token')
            }
        })
        return produto
    },
    deleteAll: async() => { 
        const produto = await Api.delete(`${router}/all`,{
            headers:{
                "x-access-token" : localStorage.getItem('token')
            }
        })
        return produto
    }
}

export default cartServices