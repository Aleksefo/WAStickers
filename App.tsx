import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'
import colors from './src/values/colors'
import StickerCard from './src/components/StickerCard'
import stickerData from './src/values/stickerData'

const App = () => {
  const [isWhatsAppAvailable, setIsWhatsAppAvailable] = useState(false)

  useEffect(() => {
    RNWhatsAppStickers.isWhatsAppAvailable()
      .then(isWhatsAppAvailable => setIsWhatsAppAvailable(isWhatsAppAvailable))
      .catch(e => console.log(e))
  }, [])

  const sendStickers = () => {
    return RNWhatsAppStickers.send('pretoria1', 'Elon Musk #1')
  }

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: colors.background,
      }}
    >
      <StickerCard data={stickerData[0]} />
      <StickerCard data={stickerData[1]} />
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={sendStickers}
          hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
          disabled={!isWhatsAppAvailable}
          style={{
            backgroundColor: isWhatsAppAvailable ? colors.accent : 'gray',
          }}
        >
          {isWhatsAppAvailable ? <Text>Click Me</Text> : <Text>Not</Text>}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App
