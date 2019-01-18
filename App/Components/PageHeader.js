// @flow

import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import style from './Styles/PageHeaderStyle'
import AddOrderIconElement from './AddOrderIconElement'
import { withNavigation } from 'react-navigation';


class PageHeader extends Component {
    render() {
        return (
            <Header
                placement="left"
                leftComponent={{ icon: this.props.showBackButton ? 'arrow-back' : 'menu', color: '#fff' }}
                centerComponent={{ text: this.props.title, style: {...style.text} }}
                rightComponent={this.props.showAddButton ? <AddOrderIconElement /> : {}}
            />
        )
    }
}

export default withNavigation(PageHeader)

