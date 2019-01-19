// @flow

import { StyleSheet, Dimensions } from 'react-native';

const desiredHeight = Dimensions.get('window').height - 70; // height of Header elem

const styles = StyleSheet.create({
  scrollView: {
    height: desiredHeight,
  },
});

export default styles;
