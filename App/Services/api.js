import { create } from 'apisauce'
import constants from '../constants'

let api = create({
    baseURL: constants.api.baseUrl
});

export default api;