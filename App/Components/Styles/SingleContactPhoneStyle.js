import { StyleSheet } from 'react-native'
import { Dimensions} from 'react-native'

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        height: 75,
        width: width,
        backgroundColor: '#B0E0E6',
        paddingBottom: 3
    },
    textWrapper: {
        paddingTop: 15,
        paddingLeft: 30,
        fontSize: 16,
    },
    phoneNumber: {
        paddingTop: 10
    }
});
