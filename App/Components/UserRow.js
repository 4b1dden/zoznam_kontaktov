import React, { Component } from 'react'
import style from './Styles/UserRowStyle'
import { Text, View, Image, TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation';

class UserRow extends Component<Props, State> {
    constructor(props: Object) {
        super(props);
        this.state = {
            profilePicPlaceholder: "https://indigenoustourism.ca/corporate/wp-content/uploads/2017/05/no-profile.jpg",
            user: props.user
        }
    }

    _onPress() {
        const { navigate } = this.props.navigation;
        
        navigate("SingleContactScreen", {
            user: this.state.user
        });
    }

    render() {
        const { user } = this.state;
        return (
            <View>
                <TouchableOpacity onPress={this._onPress.bind(this)}>
                    <View style={style.item}>
                        <Image 
                            style={style.profilePic}
                            source={{uri: user.pictureUrl ? user.pictureUrl : this.state.profilePicPlaceholder}}></Image>
                        <View>
                            <Text style={style.name}>{user.name}</Text>
                            <Text style={style.number}>{user.phone}</Text>
                        </View>
                    </View>
                </TouchableOpacity> 
            </View>
        );
    }
}

type Props = {
    navigation: Object
}

type State = {
    profilePicPlaceholder: string,
    user: Object
}

export default withNavigation(UserRow);