// @flow

import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import { textStyle } from './Styles/PageHeaderStyle'

export default class PageHeader extends Component {
    render() {
        return (
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: this.props.title, style: {color: '#fff'} }}
            />
        )
    }
}

