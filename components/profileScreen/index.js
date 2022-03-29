import React, { useState } from 'react'
import { View, Text, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import { CheckmarkIcon } from '../../instruments/svg/checkMark';
import Toast from 'react-native-toast-message';
import { FloatingLabelInput } from 'react-native-floating-label-input';

export const ProfileScreen = () => {
  const [phoneNum, setPhoneNum] = useState('')
  const [password, setPassword] = useState()
  const defaultNum = '+7 (999) 123-45-67'
  const defaultPass = 123

  const handleEnterBtn = () => {
    Toast.show({
      type: defaultNum == phoneNum && defaultPass == password ? 'success' : 'error',
      text1: defaultNum == phoneNum && defaultPass == password ? 'Correct phone number and password' : 'Wrong phone or password',
      visibilityTime: 2000,
    });
  }

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}> Вход </Text>
        </View>
        <View style={styles.phpneInputView}>
          <FloatingLabelInput
            label="Телефон*"
            value={phoneNum}
            mask="(999) 999-99-99"
            hint="+7 (___) ___-__-__"
            keyboardType="numeric"
            onChangeText={value => setPhoneNum(value)}
            containerStyles={styles.textInput}
            leftComponent={phoneNum == defaultNum &&
              <View style={styles.phoneInputIcon}>
                <CheckmarkIcon />
              </View>
            }
          />
        </View>
        <View style={styles.phpneInputView}>
          <FloatingLabelInput
            label={'Пароль*'}
            isPassword
            value={password}
            onChangeText={value => setPassword(value)}
            customShowPasswordComponent={<Text>Show</Text>}
            customHidePasswordComponent={<Text>Hide</Text>}
            containerStyles={styles.textInput}
          />
        </View>
        <View style={styles.enterSection} >
          <Pressable style={({ pressed }) => [styles.enter, { opacity: pressed ? 0.5 : 1 }]} onPress={() => handleEnterBtn()}>
            <Text style={styles.enterText} > Войти</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [styles.forgotPass, { opacity: pressed ? 0.5 : 1 }]}>
            <Text style={styles.forgotPassText}> Забыл пароль или поменял телефон </Text>
          </Pressable>
        </View>
        <View style={styles.noLoginSection} >
          <Text style={styles.noLoginText}> Еще нет аккаунта?</Text>
          <Pressable style={({ pressed }) => [styles.registerView, { opacity: pressed ? 0.5 : 1 }]}>
            <Text style={styles.register}>Зарегистрируйтесь</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}