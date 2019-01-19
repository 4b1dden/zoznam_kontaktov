// @flow

import React, { Component } from 'react'
import { Text, View, RefreshControl } from 'react-native'
import I18n from '../I18n/I18n'
import PageHeader from '../Components/PageHeader'
import { store } from '../Redux/store'
import UserRow from '../Components/UserRow'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import style from './Styles/ContactListScreenStyle'

class ContactListScreen extends Component<Props, State> {
    constructor(props: Object) {
        super(props);
        this.state = {
            ordersList: [],
            loading: false
        }

        this.fetchData.bind(this);

        store.subscribe(() => {
            const orders = store.getState().orders;

            this.setState({
                ordersList: orders,
                loading: false
            });
        });

    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        // refresh zmaze data o itemoch jednotlivych uzivatelov - v store zostane iba plain list uzivatelov
        store.dispatch({type: "FETCH_ORDERS_REQUEST"});
        this.setState({loading: true});
    }

    render() {
        const { ordersList } = this.state;
        return (
            <View>
                <PageHeader showAddButton={true} showBackButton={false} title={I18n.t("ORDERS")}/>
                {
                    ordersList ? 
                        <ScrollView 
                        style={style.scrollView}
                        refreshControl={
                            <RefreshControl 
                                refreshing={this.state.loading}
                                onRefresh={this.fetchData.bind(this)}
                            />
                        }
                        >
                            {
                                ordersList.map((user, index) => <UserRow key={user.id ? user.id : index} user={user} />)
                            }
                        </ScrollView> :
                        <Text>"No orders list yet"</Text>
                }
            </View>
        );
    }
}

type Props = { }
type State = {
    ordersList: Array<Object>,
    loading: boolean
}

export default ContactListScreen;