import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
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
    <View style={st.appContainer}>
      <StickerAccordion isWhatsAppAvailable={isWhatsAppAvailable} />
    </View>
  )
}
const st = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
})

export default App
