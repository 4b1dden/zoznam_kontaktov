// @flow

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style from './Styles/OrdersListItemStyle'

export default class OrdersListItem extends Component<Props, State> {
    constructor(props: Object) {
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

type Props = {
    item: Object
}

type State = {}