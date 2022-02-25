import axios from 'axios';
import { api } from '.'

const CartService = {
    post(data = []) {
        // console.log('vao service')
        return api.call().post('/mobile/orders/save',{
            data
        })
        .then(res => ({res}))
        .catch(err => ({err}))
    },
    notify(data){
        return axios.post('https://5fd46f4fe9cda40016f5bf32.mockapi.io/api', {
            data
        })
        .then(res1 => ({res1}))
        .catch(err1 => ({err1}))
    }
}

export default CartService;
