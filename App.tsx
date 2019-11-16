import React, { useEffect, useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'
import colors from './src/values/colors'
import StickerAccordion from './src/components/StickerAccordion'
import Theme from './src/values/Theme'
import Button from './src/components/Button'
import Rate from 'react-native-rate'
import Analytics from 'appcenter-analytics'

const App = () => {
  const [isWhatsAppAvailable, setIsWhatsAppAvailable] = useState(false)

  useEffect(() => {
    RNWhatsAppStickers.isWhatsAppAvailable()
      .then(isWhatsAppAvailable => {
        setIsWhatsAppAvailable(isWhatsAppAvailable)
        Analytics.trackEvent('The app was opened')
      })
      .catch(e => Analytics.trackEvent('WA not available ' + e))
  }, [])

  return (
    <View style={st.appContainer}>
      <StatusBar backgroundColor={colors.primary2} barStyle="light-content" />
      <View style={st.navBar}>
        <Button
          icon={'hearto'}
          onPress={() => {
            const options = {
              GooglePackageName: 'com.aleksefo.wastickers',
            }
            Rate.rate(options, success => {
              if (success) {
                Analytics.trackEvent('RateUs button clicked')
              }
            })
          }}
        />
        {/*<Button*/}
        {/*  icon={'sharealt'}*/}
        {/*  onPress={console.log('App, App')}*/}
        {/*  style={{ marginHorizontal: 30 }}*/}
        {/*/>*/}
      </View>
      <ScrollView>
        <StickerAccordion isWhatsAppAvailable={isWhatsAppAvailable} />
      </ScrollView>
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
