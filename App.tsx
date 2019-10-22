/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react'
import { View, Text, Platform, TouchableOpacity } from 'react-native'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'
import { stickerConfig } from './src/config/stickerConfig'

const App = () => {
  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null
  const [isWhatsAppAvailable, setIsWhatsAppAvailable] = useState(false)

  const { stickers, ...packConfig } = stickerConfig

  useEffect(() => {
    RNWhatsAppStickers.isWhatsAppAvailable()
      .then(isWhatsAppAvailable => setIsWhatsAppAvailable(isWhatsAppAvailable))
      .catch(e => console.log(e))
  }, [])

  const sendStickers = () => {
    if (Platform.OS === 'ios') {
      return RNWhatsAppStickers.createStickerPack(packConfig)
        .then(() => {
          const promises = stickers.map(item =>
            RNWhatsAppStickers.addSticker(item.fileName, item.emojis),
          )
          Promise.all(promises).then(() => RNWhatsAppStickers.send())
        })
        .catch(e => console.log(e))
    }
    return RNWhatsAppStickers.send('myprojectstickers', 'MyProject Stickers')
  }

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
      }}
    >
      <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }} />
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={sendStickers}
          hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
          disabled={isWhatsAppAvailable}
          style={{ backgroundColor: isWhatsAppAvailable ? 'purple' : 'gray' }}
        >
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App
