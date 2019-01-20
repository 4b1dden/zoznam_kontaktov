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
            <View style={{ height: 80, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                <Text numberOfLines={1} style={{ flex: 1, textAlign: "left", paddingLeft: 20, fontWeight: 'bold' }}>
                    {item.name}
                </Text>
                <Text style={{ textAlign: "right", paddingRight: 35 }}>{item.count}x</Text>
            </View>
            // <View style={style.container}>
            //     <Text>
            //         {item.name}
            //     </Text>
            //     <Text style={{alignSelf: 'flex-end'}}>
            //         {item.count}x
            //     </Text>
            // </View>
        );
    }
}

type Props = {
    item: Object
}

type State = {}