import { api } from '.'

const SearchService = {
    get(search) {
        console.log(search)
        // console.log('vao list product')
        return api.call().get('/mobile/products',{
            params : {
                offset: 0,
                limit: 20,
                search,
            }
        }).then(res => ({res}))
        .catch(err => ({err}))
    },
}

export default SearchService;
