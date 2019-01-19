import React, { Component } from 'react'
import { Text, View } from 'react-native'
import I18n from '../I18n/I18n'
import style from './Styles/SingleContactPhoneStyle'

export default class OrdersListItem extends Component<Props, State> {
    constructor(props: Object) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.textWrapper}>
                    <Text style={{fontWeight: 'bold'}}>{I18n.t("PHONE_NUMBER_SHORT")}</Text>
                    <Text style={style.phoneNumber}>{this.props.number}</Text>
                </View>
            </View>
        );
    }
}

type Props = {
    number: string
}

type State = {}