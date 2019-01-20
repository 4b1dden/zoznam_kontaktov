// @flow

import { Dimensions } from 'react-native'

export default {
  dimensions: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  api: {
    baseUrl: 'http://private-36f1e-contactstest.apiary-mock.com/',
    routes: {
      contacts: '/contacts',
      getSingleContactOrders: '/contacts/:USER_ID/order',
    },
  },
};
