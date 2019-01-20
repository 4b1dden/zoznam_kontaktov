//@flow

import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import OrdersListItem from './OrdersListItem'
import style from './Styles/OrdersListStyle'
export default class OrdersList extends Component<Props, State> {
    constructor(props: Object) {
        super(props);
    }

    render () {
        const { items } = this.props.user;

        return (
            <View>
                {
                    items ? 
                        <View style={style.itemsWrapper}>
                            {items.map(
                                (item, index) => <OrdersListItem key={index} item={item} />
                            )}
                        </View>
                        :
                        <View style={style.activityIndicatorWrapper}>
                            <ActivityIndicator
                                color="#0066cc"
                             />
                        </View>
                   
                }
            </View>
        );
    }
}

type Props = {
    user: Object
}

type State = {}