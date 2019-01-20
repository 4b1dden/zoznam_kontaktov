// @flow

import { StyleSheet } from 'react-native';

const textPadding = {
  paddingLeft: 30,
  paddingTop: 10,
};

const rowHeight = 90;
const picHeight = 70;
const picWidth = 70

export default StyleSheet.create({
  item: {
    fontSize: 18,
    flex: 1,
    height: rowHeight,
    flexDirection: 'row',
    borderBottomColor: '#696969',
    borderWidth: 0.75,
    padding: 0,
  },
  profilePicWrapper: {
    height: rowHeight,
    width: picWidth + 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  profilePic: {
    paddingTop: (rowHeight - picHeight) / 2,
    width: picWidth,
    height: picHeight,
    marginLeft: 8,
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
