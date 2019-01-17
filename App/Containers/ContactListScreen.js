import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, ListView, Button, Alert } from 'react-native'
import I18n from '../I18n/I18n'
import PageHeader from '../Components/PageHeader'
import api from '../Services/api'
import constants from '../constants'
import styles from './Styles/ContactListScreenStyle'

class ContactListScreen extends Component {
    constructor(props) {
        super(props);
    
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }

    componentWillMount() {
        api.get(constants.api.routes.contacts).then(resp => {
            // console.log(resp.data.items);
        })
    }

    onButtonPressed() {
        console.log(this.props.orders);
    }

    render() {
        return (
            <View>
                <PageHeader title={I18n.t("ORDERS")}/>
                <Button onPress={this.onButtonPressed} title="press" />
                <ListView 
                    style={styles}
                    dataSource={this.state.dataSource}
                    renderRow={(data) => <View><Text>{data}</Text></View>} />
            </View>
        )
    }
}

function mapStateToProps(state){
    console.log('called mapstatetoprops')
    console.log(state);
    return {
        orders: state.orders,
    }
}

export default connect(mapStateToProps)(ContactListScreen);