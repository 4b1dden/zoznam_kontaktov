import React, { Component } from 'react'
import { Text, View } from 'react-native'
import I18n from '../I18n/I18n'

export default class OrdersListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{height: 65, backgroundColor: 'lightgreen'}}>
                <Text>{this.props.number}</Text>
            </View>
        )
    }
}