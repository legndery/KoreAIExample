import React from 'react';
import { StyleSheet, View, Button, Platform } from 'react-native';
// import RNKoreAI from '@idfc-tp/kore-bot-sdk"';
import ReactNativeBiometrics from 'react-native-biometrics'

const bot_id = 'st-43a19913-03e8-531b-815c-0f54e4201aa5';

const bot_name = 'BankAssist Dev';
const authorization = "";
const xauth = "";
const JWT_SERVER_URL = "https://bankassist.kore.ai/workbench/api/";
const SERVER_URL = "https://bankassist.kore.ai/workbench/api/";
const Branding_SERVER_URL = "https://bankassist.kore.ai/";
const identity = generateQuickGuid();

export default () => {
  // if (Platform.OS === 'ios') {
  //   return (
  //     <View style={styles.container}>
  //       <Button
  //         onPress={() => { RNKoreAI.show("hello world") }}
  //         title="Start Core Ai"
  //         color="#841584"
  //         accessibilityLabel="Learn more about this purple button"
  //       />
  //     </View>
  //   );
  // } else {
  ReactNativeBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' })
    .then((resultObject) => {
      const { success } = resultObject

      if (success) {
        console.log('successful biometrics provided')
      } else {
        console.log('user cancelled biometric prompt')
      }
    })
    .catch(() => {
      console.log('biometrics failed')
    })
  // RNKoreAI.initialize(bot_id, bot_name, authorization, xauth, identity, SERVER_URL, JWT_SERVER_URL, Branding_SERVER_URL)
  return (
    <View style={styles.container}>
      <Button
        onPress={() => { /*RNKoreAI.show()*/ }}
        title="Start Core Ai"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
  // }
}

function generateQuickGuid() {
  return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});