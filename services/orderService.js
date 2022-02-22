import { api } from '.'

const OrderService = {
    post(data = []) {
        // console.log('vao service')
        return api.call().post('/mobile/orders/save',{
            data
        })
        .then(res => ({res}))
        .catch(err => ({err}))
    },
    detail(id) {
        // console.log('id', id)
        return api.call().get(`/mobile/orders/${id}`)
        .then(res => ({res}))
        .catch(err => ({err}))
    }
}

export default OrderService;
