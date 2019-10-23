import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'
import colors from './src/values/colors'
import StickerAccordion from './src/components/StickerAccordion'

const App = () => {
  const [isWhatsAppAvailable, setIsWhatsAppAvailable] = useState(false)

  useEffect(() => {
    RNWhatsAppStickers.isWhatsAppAvailable()
      .then(isWhatsAppAvailable => setIsWhatsAppAvailable(isWhatsAppAvailable))
      .catch(e => console.log(e))
  }, [])

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: colors.background,
      }}
    >
      <StickerAccordion isWhatsAppAvailable={isWhatsAppAvailable} />
    </View>
  )
}

export default App
