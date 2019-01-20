import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback, Alert, Linking } from 'react-native'
import I18n from '../I18n/I18n'
import style from './Styles/SingleContactPhoneStyle'
import call from 'react-native-phone-call'

export default class OrdersListItem extends Component<Props, State> {
    constructor(props: Object) {
        super(props);

    }

    _onClick() {
        const args = {
            number: this.props.number,
            prompt: false
        }

        Alert.alert(I18n.t("CONTACT_USER"), I18n.t("SELECT_CONTACT_OPTION"), [
            {text: "Email", onPress: () => Linking.openURL("mailto:example@example.com?subject=Example_Message")},
            {text: I18n.t("CALL"), onPress: () => call(args)},
            {text: I18n.t("CLOSE_PROMPT"), style: 'cancel'}
        ]);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick.bind(this)}>
                <View style={style.container}>
                    <View style={style.textWrapper}>
                        <Text style={{fontWeight: 'bold'}}>{I18n.t("CONTACT_USER")}</Text>
                        <Text style={style.phoneNumber}>{this.props.number}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

type Props = {
    number: string
}

type State = {}