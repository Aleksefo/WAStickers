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
  ScrollView,
  View,
  Text,
  StatusBar, Platform,
} from 'react-native';
import RNWhatsAppStickers from "react-native-whatsapp-stickers"
import { stickerConfig } from "./src/config/stickerConfig"

const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  const [isWhatsAppAvailable, setIsWhatsAppAvailable] = useState(false)

  const { stickers, ...packConfig } = stickerConfig


    useEffect(() => {
      RNWhatsAppStickers.isWhatsAppAvailable()
          .then(isWhatsAppAvailable => {
            if (isWhatsAppAvailable) {
              setIsWhatsAppAvailable(true)
              if (Platform.OS === 'ios') {
                return RNWhatsAppStickers.createStickerPack(packConfig)
                    .then(() => {
                      const promises = stickers.map(item =>
                          RNWhatsAppStickers.addSticker(item.fileName, item.emojis)
                      )
                      Promise.all(promises).then(() => RNWhatsAppStickers.send())
                    })
                    .catch(e => console.log(e))
              }

              return RNWhatsAppStickers.send('myprojectstickers', 'MyProject Stickers')
            }

            return undefined
          })
          .catch(e => console.log(e))
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
          {isWhatsAppAvailable ? <Text >Available</Text>: <Text >WA Not Available</Text>}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
