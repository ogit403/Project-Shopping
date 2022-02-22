import { api } from '.'

const HomeService = {
    listSlider({
        offset = 0,
        limit = 10,
        ...restParam
    } = {}) {
        // console.log('vao service')
        return api.call().get('/mobile/sliders',{
            params : {
                offset,
                limit,
                ...restParam
            }
        })
        .then(res => ({res}))
        .catch(err => ({err}))
    },
    listCate({
        offset = 0,
        limit = 10,
        ...restParam
    } = {}) {
        return api.call().get('/mobile/categories',{
            params : {
                offset,
                limit,
                ...restParam
            }
        }).then(res => ({res}))
        .catch(err => ({err}))
    },
    listProduct({
        offset = 0,
        limit = 20,
        ...restParam
    } = {}) {
        // console.log('vao list product')
        return api.call().get('/mobile/products',{
            params : {
                offset,
                limit,
                ...restParam
            }
        }).then(res => ({res}))
        .catch(err => ({err}))
    },
    listProductNew({
        offset = 0,
        limit = 20,
        is_new = true,
        ...restParam
    } = {}) {
        return api.call().get('/mobile/products',{
            params : {
                offset,
                limit,
                is_new,
                ...restParam
            }
        }).then(res => ({res}))
        .catch(err => ({err}))
    },
    listProductSpec({
        offset = 0,
        limit = 20,
        special = true,
        ...restParam
    } = {}) {
        return api.call().get('/mobile/products',{
            params : {
                offset,
                limit,
                special,
                ...restParam
            }
        }).then(res => ({res}))
        .catch(err => ({err}))
    },
}

export default HomeService;
