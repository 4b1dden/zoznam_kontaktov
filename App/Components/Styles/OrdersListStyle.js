// @flow

import { StyleSheet } from 'react-native'
import constants from '../../constants'

export default StyleSheet.create({
    activityIndicatorWrapper: {
        flex: 1, 
        justifyContent: 'center', 
        height: constants.dimensions.height, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        padding: 10
    },
    itemsWrapper: {
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'flex-start' 
    }
});