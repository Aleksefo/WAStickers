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
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
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
    console.log('App, sendStickers sending')
    return RNWhatsAppStickers.send('pretoria1', 'Elon Musk #1')
  }

  const DATA = [
    'Pretoria1',
    'Pretoria2',
    'Pretoria3',
    'Pretoria4',
    'Pretoria5',
    'Pretoria6',
    'Pretoria7',
    'Pretoria8',
    'Pretoria9',
    'Pretoria10',
    'Pretoria11',
    'Pretoria12',
    'Pretoria13',
    'Pretoria14',
    'Pretoria15',
  ]

  const Item = ({ picture }) => (
    <>
      <Image
        source={{ uri: `asset:/pretoria1/${picture}.webp` }}
        style={{ width: 48, height: 48 }}
      />
      <Text>{}</Text>
    </>
  )

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'green',
      }}
    >
      <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item picture={item} dog={console.log(', item', item)} />
          )}
          keyExtractor={(item, index) => index.toString()}
          style={{
            borderWidth: 1,
            borderColor: 'red',
            backgroundColor: 'pink',
          }}
          horizontal
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={sendStickers}
          hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
          disabled={!isWhatsAppAvailable}
          style={{ backgroundColor: isWhatsAppAvailable ? 'purple' : 'gray' }}
        >
          {isWhatsAppAvailable ? <Text>Click Me</Text> : <Text>Not</Text>}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App
