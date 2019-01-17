import { StyleSheet } from 'react-native'

let specs = {
    height: 40,
    fontSize: 13,
    color: 'black'
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row'
    },
    itemName: {
        ...specs,
        paddingLeft: 12
    },
    itemQuantity: {
        ...specs,
        textAlign: 'right',
        paddingRight: 15
    }
});

export default style;