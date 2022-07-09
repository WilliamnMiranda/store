import Api from './Api'
const router = '/product'
const productServices = {
    get: async(params) => {
        const {data} = await Api.get(router);
        return data;
    },
    getProductById: async(productId) =>{
        const {data} = await Api.get(`${router}/${productId}`)
        return data;
    }
}

export default productServices