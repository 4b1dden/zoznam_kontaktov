import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import PageHeader from '../Components/PageHeader'
import { store } from '../Redux/store'
import OrdersList from '../Components/OrdersList'
import style from './Styles/SingleContactStyle'
import SingleContactPhone from '../Components/SingleContactPhone'

export default class SingleOrderScreen extends Component {
    constructor(props) {
        super(props);

        const { navigation } = this.props;
        
        this.state = {
            user: navigation.getParam('user')
        };

        this.unsubsribe = store.subscribe(() => {
            const list = store.getState().orders;
            this.setState({
                user: list.find(user => user.id == this.state.user.id)
            });
        });
    }

    componentWillUnmount() {
        this.unsubsribe();
    }

    componentWillMount() {
        let userId = this.state.user.id;
        store.dispatch({type: "FETCH_SINGLE_CONTACT_REQUEST", userId: userId});
    }

    render() {
        return (
            <View>
                <PageHeader showBackButton={true} title={this.state.user.name} />
                <SingleContactPhone number={this.state.user.phone} />
                <ScrollView style={style.container}>
                    <OrdersList user={this.state.user} />
                </ScrollView>
            </View>
        );
    }
}