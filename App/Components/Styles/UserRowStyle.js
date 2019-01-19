// @flow

import { StyleSheet } from 'react-native';

const textPadding = {
  paddingLeft: 30,
  paddingTop: 10,
};

export default StyleSheet.create({
  item: {
    fontSize: 18,
    flex: 1,
    height: 110,
    flexDirection: 'row',
    padding: 0,
    borderColor: 'black',
    borderWidth: 1,
  },
  profilePic: {
    width: 50,
    height: 50,
  },
  name: {
    ...textPadding,
    fontSize: 18,
  },
  number: {
    ...textPadding,
    fontSize: 14,
  },
});
