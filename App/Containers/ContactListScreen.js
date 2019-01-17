import React, { Component } from 'react'
import { Text, View, RefreshControl } from 'react-native'
import I18n from '../I18n/I18n'
import PageHeader from '../Components/PageHeader'
import { store } from '../Redux/store'
import UserRow from '../Components/UserRow'
import { FlatList, ScrollView } from 'react-native-gesture-handler';

class ContactListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ordersList: [],
            loading: false
        }

        this.onButtonPressed.bind(this);
        this.fetchData.bind(this);

        store.subscribe(() => {
            const orders = store.getState().orders;

            this.setState({
                ordersList: orders,
                loading: false
            });
        });

    }

    fetchData() {
        // refresh zmaze data o itemoch jednotlivych uzivatelov - v store zostane iba plain list uzivatelov
        store.dispatch({type: "FETCH_ORDERS_REQUEST"});
        this.setState({loading: true});
    }

    componentWillMount() {
        this.fetchData();
    }

    onButtonPressed() {
        console.log(this.state);
    }

    render() {
        const { ordersList } = this.state;
        return (
            <View>
                <PageHeader showAddButton={true} showBackButton={false} title={I18n.t("ORDERS")}/>
                {
                    ordersList ? 
                        <ScrollView 
                        refreshControl={
                            <RefreshControl 
                                refreshing={this.state.loading}
                                onRefresh={this.fetchData.bind(this)}
                            />
                        }
                        >
                            {
                                ordersList.map(user => <UserRow key={user.id} user={user} />)
                            }
                        </ScrollView> :
                        <Text>"No orders list yet"</Text>
                }
            </View>
        );
    }
}

export default ContactListScreen;