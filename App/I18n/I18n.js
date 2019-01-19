// @flow

import I18n from 'react-native-i18n';

I18n.fallbacks = true;
// I18n.locale = "sk" // uncomment na slovensky locale

/* eslint-disable global-require */

I18n.translations = {
  en: require('./languages/english.json'),
  sk: require('./languages/sk.json'),
};

/* eslint-enable global-require */


export default I18n;
