import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style from './Styles/OrdersListItemStyle'

export default class OrdersListItem extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { item } = this.props;
        return (
            <View style={style.container}>
                <Text style={style.itemName}>{item.name}</Text>
                <Text style={style.itemQuantity}>{item.count}</Text>
            </View>
        );
    }
}