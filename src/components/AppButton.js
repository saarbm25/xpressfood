import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../global/styles';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppButton({color = colors.button, textColor = colors.grey5, icon, children}) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]}>
        {icon && <MaterialCommunityIcons name={icon} size={28} color={colors.grey5} style={styles.icon}></MaterialCommunityIcons>}
        <Text style={[icon ? styles.iconButtonText : styles.buttonText, {color: textColor}]}>{children}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 8,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        marginHorizontal: 10,
    }
})