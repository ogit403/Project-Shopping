import { api } from '.'

const CartService = {
    post(data = []) {
        // console.log('vao service')
        return api.call().post('/mobile/orders/save',{
            data
        })
        .then(res => ({res}))
        .catch(err => ({err}))
    }
}

export default CartService;
