import Api from '@/services/Api'

export default {
    getBitcoinPrice() {
        return Api().post('dashboard')
    }
}