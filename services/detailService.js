import { api } from '.'

const DetailService = {
    item(id) {
        // console.log('vao service')
        return api.call().get(`/mobile/products/${id}`)
        .then(res => ({res}))
        .catch(err => ({err}))
    }
}

export default DetailService;
