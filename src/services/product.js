import Api from './Api'
const router = '/product'
const productServices = {
    get: async(params) => {
        const {data} = await Api.get(router);
        return data;
    }
}

export default productServices