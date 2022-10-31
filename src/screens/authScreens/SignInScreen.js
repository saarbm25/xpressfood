import React from 'react';
import { View, Text, StyleSheet, Dimentions, TouchableHighlight, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors, parameters, globalStyles } from '../../global/styles' 
import Header from '../../components/Header';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';

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
          <AppTextInput placeholder='Email' icon='mail'></AppTextInput>
          <AppTextInput placeholder='Password' icon='lock' secure={true}></AppTextInput>
          <AppButton>SIGN IN</AppButton>
          <AppButton icon='facebook' color={colors.blue}>Sign In With Facebook</AppButton>
          <AppButton icon='google' color={colors.red}>Sign In With Google</AppButton>
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