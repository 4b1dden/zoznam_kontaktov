
import React, { Component } from 'react'
import { View, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class AddOrderIconElement extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { navigate } = this.props.navigation;
        const hitSlopValue = 25;

        return (
            <TouchableHighlight 
                onPress={() => navigate("AddContactScreen")} 
                hitSlop={{top: hitSlopValue, bottom: hitSlopValue, left: hitSlopValue, right: hitSlopValue}}>
                <View>
                    <Icon color="#fff" name="add" />
                </View>
            </TouchableHighlight>
        )
    }
}

export default withNavigation(AddOrderIconElement);