import { api } from '.'

const CategoryService = {
    list({
        offset = 0,
        limit = 30,
        special,
        is_new,
        sortBy,
        order,
        min_price,
        max_price,
        ...restParam
    } = {}) {
        // console.log('vao service')
        return api.call().get('/mobile/products',{
            params : {
                offset,
                limit,
                special,
                is_new,
                sortBy,
                order,
                min_price,
                max_price,
                ...restParam
            }
        })
        .then(res => ({res}))
        .catch(err => ({err}))
    }
}

export default CategoryService;
