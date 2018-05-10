import Api from '@/services/Api'

export default {
    getBitcoinPrice(credentals) {
        return Api().post('dashboard', credentals)
    }
}