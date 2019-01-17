import React, { Component } from 'react'
import { Text, View } from 'react-native'
import OrdersListItem from './OrdersListItem'

export default class OrdersList extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { items } = this.props.user;

        return (
            <View>
                {
                    items ? 
                        items.map(
                            (item, index) => <OrdersListItem key={index} item={item} />
                        )
// pre ucely zadania -> lorem je scrollview
//                         <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus nulla ac sem suscipit, a placerat urna lacinia. Fusce scelerisque, dui aliquam placerat consectetur, urna sem pulvinar eros, at volutpat mi est vel libero. Sed sed mauris eget elit tincidunt venenatis. Donec pretium consequat enim, nec dignissim nisl maximus eu. Duis purus tellus, tincidunt ut vulputate nec, vulputate non nulla. In pulvinar enim ut nisi consequat bibendum. Cras fringilla odio vitae velit vulputate cursus. Duis vulputate ligula at efficitur gravida. In eu maximus nulla. Phasellus accumsan, dolor facilisis sagittis tempor, metus nisi porttitor lorem, non rutrum diam lacus in augue. Vivamus magna nunc, maximus eu egestas a, finibus sit amet nunc. In sit amet ipsum id justo interdum aliquet. Aliquam erat volutpat. Donec id ex luctus, tempus eros ut, mollis lacus. Nunc varius quam quis elit tincidunt, at semper diam semper. Maecenas facilisis ultrices enim, in consequat tortor tristique sed.
// Cras rhoncus erat sit amet eros elementum bibendum quis vitae nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur eu erat id augue lobortis pharetra nec sit amet est. Morbi magna nibh, facilisis non vestibulum ut, laoreet id lorem. In sed ipsum vitae metus sollicitudin egestas. Proin ipsum ante, feugiat non interdum non, varius imperdiet leo. Donec feugiat nibh sed libero mattis, ut laoreet mauris interdum.
// Integer mauris mi, feugiat vitae porta ac, rhoncus eget ante. Nunc vel erat placerat, rhoncus justo non, pulvinar tortor. Donec id massa vehicula, pellentesque risus vitae, viverra nulla. Pellentesque porta nec augue quis maximus. Aliquam quis convallis felis. Nulla facilisi. Vivamus ultrices nisi ac tellus dapibus, eget semper lectus finibus. Suspendisse molestie malesuada lacus at vestibulum. Pellentesque erat est, auctor id vehicula ac, iaculis maximus neque. Suspendisse potenti. Ut auctor varius purus cursus venenatis. Fusce in ligula diam. Phasellus quis lorem gravida, ullamcorper urna a, porttitor urna.
// Donec laoreet nulla a justo rutrum, quis luctus justo euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tristique, sapien vitae sollicitudin placerat, sem nisl pellentesque massa, eget mattis mi diam sit amet augue. Ut auctor dictum enim, in pharetra diam sollicitudin et. Phasellus nec finibus sem, eget tempor ante. Nulla eget ultricies justo. Sed tempor eros a velit facilisis, at euismod enim finibus. Vivamus quis sem ligula. Nullam id aliquam est. Quisque tellus libero, luctus vel pulvinar nec, luctus eget metus. Donec condimentum lacus erat. Phasellus rhoncus mauris pulvinar, venenatis metus vitae, faucibus eros. Sed vel cursus risus, ac molestie velit. Donec pretium hendrerit enim vel molestie.
// Aliquam quis tortor mollis felis sagittis dictum vitae et lectus. Nunc dapibus ultrices dui, imperdiet scelerisque ex blandit sed. In dapibus scelerisque elit, in feugiat arcu condimentum sed. Quisque sed facilisis mi. In congue urna sed blandit imperdiet. Cras sit amet nisi nibh. Donec congue risus sem, eu pharetra metus sollicitudin vitae. Morbi vitae nisi sed purus malesuada mattis non quis ipsum. Vestibulum 
//                         </Text> 
                        :
                    <Text>Este ziadne</Text>
                }
            </View>
        );
    }
}