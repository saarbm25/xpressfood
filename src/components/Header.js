import React from 'react';
import { View, Text, StyleSheet, Dimentions, TouchableHighlight, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors, parameters } from '../global/styles' 

function Header({title}) {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <MaterialCommunityIcons name='arrow-left' size={28} color={colors.grey5}></MaterialCommunityIcons>
            </TouchableOpacity>
                <View>
                    <Text style={styles.headerText}>
                        {title}
                    </Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.button,
        height: parameters.headerHeight,
        alignItems: 'center',
        paddingLeft: 10,
    },
    headerText: {
        color: colors.grey5,
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 30,
    }
})

export default Header;