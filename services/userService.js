import { api } from '.'

const UserService = {
    login({email, password} = {}) {
        return api.call().post(`/auth/login`, {
            email,
            password
        })
        .then(res => ({res}))
        .catch(err => ({err}))
    },
    get() {
        // console.log('da vao service')
        return api.call().get(`/auth/me`)
        .then(res => ({res}))
        .catch(err => ({err}))
    },
    change({name, phone, address} = {}) {
        return api.call().put(`/auth/update`, {
            name, 
            phone,
            address
        })
        .then(res1 => ({res1}))
        .catch(err1 => ({err1}))
    },
    getOrder() {
        return api.call().get(`/mobile/orders`)
        .then(res => ({res}))
        .catch(err => ({err}))
    },
}

export default UserService;
