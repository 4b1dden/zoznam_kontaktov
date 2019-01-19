// @flow

import React, { Component } from 'react'
import { Text, View, RefreshControl } from 'react-native'
import I18n from '../I18n/I18n'
import PageHeader from '../Components/PageHeader'
import NewOrderForm from '../Components/NewOrderForm'

export default class ContactListScreen extends Component<Props, State> {
    constructor(props: Object) {
        super(props);
    }

    render () {
        return (
            <View>
                <PageHeader showBackButton={true} title={I18n.t("NEW_CONTACT")} />
                <NewOrderForm />
            </View>
        )
    }
}

type Props = { }
type State = { }