/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RNWhatsAppStickers from "react-native-whatsapp-stickers"

const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  const [isWhatsAppAvailable, setIsWhatsAppAvailable] = useState(false)

  const config = {
    identifier: '',
    name: '',
    publisher: '',
    trayImageFileName: '',
    publisherEmail: '',
    publisherWebsite: '',
    privacyPolicyWebsite: '',
    licenseAgreementWebsite: '',
  }

    useEffect(() => {
      RNWhatsAppStickers.isWhatsAppAvailable()
          .then(isWhatsAppAvailable => setIsWhatsAppAvailable(isWhatsAppAvailable))
          .catch(e => console.log(e))//todo sed a proper message about WA not available, add to Crashlytics

      RNWhatsAppStickers.createStickerPack(config)
          .then(() => console.log('success'))
          .catch(e => console.log(e))

      // RNWhatsAppStickers.addSticker('stickername.png', ['😎'])
      //     .then(() => console.log('success'))
      //     .catch(e => console.log(e))

      // RNWhatsAppStickers.send()
      //     .then(() => console.log('success'))
      //     .catch(e => console.log(e))
      }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          >
          {!usingHermes ? null : (
            <View >
              <Text >Engine: Hermes</Text>
            </View>
          )}
          {isWhatsAppAvailable ? <Text >Available</Text>: null}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
