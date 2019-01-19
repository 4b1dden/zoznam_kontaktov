// @flow

import React, { Component } from 'react'
import { View, TouchableHighlight } from 'react-native'
import { Icon, Header } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class HeaderIconElement extends Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render () {
        const { iconName } = this.props;
        const hitSlopValue = 25;

        return (
            <TouchableHighlight 
                onPress={this.props.onClick.bind(this)} 
                hitSlop={{top: hitSlopValue, bottom: hitSlopValue, left: hitSlopValue, right: hitSlopValue}}>
                <View>
                    <Icon color="#fff" name={iconName} />
                </View>
            </TouchableHighlight>
        )
    }
}

type Props = {
    navigation: Object,
    iconName: string,
    onClick: Function
}

type State = {}

export default withNavigation(HeaderIconElement);