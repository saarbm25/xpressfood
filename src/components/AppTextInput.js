import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../global/styles'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppTextInput({children, placeholder, icon, secure}) {
  return (
      <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} size={22} color={colors.grey3} style={styles.icon}></MaterialCommunityIcons>}
          <TextInput
              style={styles.inputText}
              placeholder={placeholder}
          >{children}</TextInput>
          {secure && <MaterialCommunityIcons name={'eye'} size={22} color={colors.grey3} style={styles.secure}></MaterialCommunityIcons>}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 7,
        borderWidth: 1,
        borderColor: colors.grey3,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputText: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flex: 1,
    },
    icon: {
        paddingLeft: 10,
    },
    secure: {
        paddingRight: 10,
    }

})