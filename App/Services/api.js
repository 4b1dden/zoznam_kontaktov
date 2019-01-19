// @flow

import { create } from 'apisauce';
import constants from '../constants';

const api = create({
  baseURL: constants.api.baseUrl,
});

export default api;
