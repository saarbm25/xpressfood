import React from 'react';
import { View, Text, StyleSheet, Dimentions, TouchableHighlight, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors, parameters, globalStyles } from '../../global/styles' 
import Header from '../../components/Header';
import AppTextInput from '../../components/AppTextInput';

export default function SignInScreen() {
  return (
      <View style={styles.container}>
          <Header title='MY ACCOUNT' icon='arrow-left'></Header>
          <View style={{padding: 10}}>
              <Text style={globalStyles.title}>
                  Sign-In
              </Text>
          </View>
          <View style={{alignItems: 'center'}}>
              <Text style={styles.smallText}>
                  Please enter the email and password
              </Text>
          </View>
          <AppTextInput placeholder='Email'></AppTextInput>
          <AppTextInput placeholder='Password' icon='lock' secure={true}></AppTextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    smallText: {
        color: colors.grey3,
        fontSize: 16,
    }
})