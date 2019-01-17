// @flow

import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import style from './Styles/PageHeaderStyle'

export default class PageHeader extends Component {
    render() {
        return (
            <Header
                placement="left"
                leftComponent={{ icon: this.props.showBackButton ? 'arrow-back' : 'menu', color: '#fff' }}
                centerComponent={{ text: this.props.title, style: {...style.text} }}
                rightComponent={this.props.showAddButton ? {icon: 'add', color: '#fff'} : {}}
            />
        )
    }
}

