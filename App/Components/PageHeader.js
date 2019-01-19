// @flow

import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import style from './Styles/PageHeaderStyle'
import HeaderIconElement from './HeaderIconElement'
import { withNavigation } from 'react-navigation';

type Props = {
    showBackButton?: boolean,
    showAddButton?: boolean,
    title: string,
    navigation: Object
}

type State = { }

class PageHeader extends Component<Props, State> {
    onClick() {
        this.props.navigation.goBack(null);
    }

    openAddNewPage() {
        this.props.navigation.navigate("AddContactScreen");
    }

    render() {
        return (
            <Header
                placement="left"
                leftComponent={this.props.showBackButton ? 
                    <HeaderIconElement onClick={this.onClick.bind(this)} iconName="arrow-back" /> : 
                    {icon: 'menu', color: "#fff"}}
                centerComponent={{ text: this.props.title, style: {...style.text} }}
                rightComponent={this.props.showAddButton ? 
                    <HeaderIconElement onClick={this.openAddNewPage.bind(this)} iconName="add"/> : 
                    {}}
            />
        )
    }
}

export default withNavigation(PageHeader)

