import React, { Component } from 'react'
import { Text, View, RefreshControl } from 'react-native'
import I18n from '../I18n/I18n'
import PageHeader from '../Components/PageHeader'
import NewOrderForm from '../Components/NewOrderForm'

export default class ContactListScreen extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View>
                <PageHeader title={I18n.t("NEW_CONTACT")} />
                <NewOrderForm />
            </View>
        )
    }
}