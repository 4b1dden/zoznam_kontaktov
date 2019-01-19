// @flow

import React, { Component } from 'react'
import { View, TouchableWithoutFeedback,  Keyboard, Alert } from 'react-native'
import I18n from '../I18n/I18n'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import style from './Styles/NewOrderFormStyle'
import { store } from '../Redux/store';

class NewOrderForm extends Component<Props, State> {
    constructor() {
        super();

        this.resetState = this.resetState.bind(this);
    }

    componentWillMount() {
        this.resetState();
    }

    resetState: () => void

    resetState() {
        this.setState({
            nameError: false,
            phoneError: false,
            name: "",
            phone: ""
        });
    }

    _onNameChange(text: string) {
        this.setState({
            name: text
        });
    }

    _onPhoneChange(val: string) {
        this.setState({
            phone: val
        });
    }

    _onButtonPress() {
        this.setState({
            phoneError: this.state.phone.length <= 4,
            nameError: this.state.name.length <= 4
        });

        if (!this.state.phoneError && !this.state.nameError && 
            this.state.phone.length >= 5 && this.state.name.length >= 5) {
            Keyboard.dismiss();
            let credentials = { 
                name: this.state.name, 
                phone: this.state.phone 
            }
            store.dispatch({type: "ADD_NEW_ORDER_REQUEST", credentials: credentials});

            this.props.navigation.goBack(null);
        }
    }

    render () {
        return (
            <TouchableWithoutFeedback 
            onPress={() => Keyboard.dismiss()}
            style={{borderColor: 'black', borderWidth: 1}}>
                <View>
                    <FormLabel>Name</FormLabel>
                    <FormInput 
                        placeholder={I18n.t("FORM_NAME_PLACEHOLDER")} 
                        onChangeText={this._onNameChange.bind(this)}/>
                    {this.state.nameError && <FormValidationMessage>{I18n.t("FIELD_MUST_HAVE_AT_LEAST_5_CHARS")}</FormValidationMessage>}

                    <FormLabel>Phone</FormLabel>
                    <FormInput 
                        placeholder={I18n.t("FORM_PHONE_PLACEHOLDER")} 
                        onChangeText={this._onPhoneChange.bind(this)}
                        keyboardType='numeric'/>
                    {this.state.phoneError && <FormValidationMessage>{I18n.t("FIELD_MUST_HAVE_AT_LEAST_5_CHARS")}</FormValidationMessage>}

                    <Button style={style.submitBtn} title={I18n.t("ADD_NEW_ORDER")} onPress={this._onButtonPress.bind(this)} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

type Props = {
    navigation: Object
}

type State = {
    resetState: Function,
    nameError: boolean,
    phoneError: boolean,
    name: string,
    phone: string
}

export default withNavigation(NewOrderForm);