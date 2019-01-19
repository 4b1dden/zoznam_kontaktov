// @flow

import { StyleSheet } from 'react-native';

const specs = {
  height: 40,
  fontSize: 13,
  color: 'black',
};

const style = StyleSheet.create({
  container: {
    height: 80
  },
  itemName: {
    ...specs,
    paddingLeft: 12,
  },
  itemQuantity: {
    ...specs,
    textAlign: 'right',
    paddingRight: 15,
  },
});

export default style;
