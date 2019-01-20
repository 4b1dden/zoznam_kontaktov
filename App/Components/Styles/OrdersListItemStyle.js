// @flow

import { StyleSheet } from 'react-native';

const specs = {
  fontSize: 13,
  color: 'black',
};

const style = StyleSheet.create({
  container: {
    height: 80
  },
  itemName: {
    ...specs,
    textAlign: 'left',
  },
  itemQuantity: {
    ...specs,
    textAlign: 'right'
  },
});

export default style;
