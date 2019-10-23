import React, { useEffect, useState } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'
import colors from './src/values/colors'
import StickerAccordion from './src/components/StickerAccordion'
import Icon from 'react-native-vector-icons/AntDesign'
import Theme from './src/values/Theme'

const App = () => {
  const [isWhatsAppAvailable, setIsWhatsAppAvailable] = useState(false)

  useEffect(() => {
    RNWhatsAppStickers.isWhatsAppAvailable()
      .then(isWhatsAppAvailable => setIsWhatsAppAvailable(isWhatsAppAvailable))
      .catch(e => console.log(e))
  }, [])

  return (
    <View style={st.appContainer}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={st.navBar}>
        <Icon name="hearto" size={40} color={colors.accent} />
        <Icon
          name="sharealt"
          size={40}
          color={colors.accent}
          style={{ paddingHorizontal: 30 }}
        />
      </View>
      <StickerAccordion isWhatsAppAvailable={isWhatsAppAvailable} />
    </View>
  )
}
const st = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  navBar: {
    paddingVertical: 5,
    width: Theme.w,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    shadowColor: '#000',
    backgroundColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
})

export default App
