import Analytics from 'appcenter-analytics'
import React, { useState } from 'react'
import { View, Alert } from 'react-native'
import Rate from 'react-native-rate'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'
import Sticker from './Sticker'
import Button from './Button'

const StickerCard = ({ data, title, identifier, isWhatsAppAvailable }) => {
  const [rated, setRated] = useState(false)

  const sendStickers = () => {
    if (identifier === 'starmanMusk' && !rated) {
      Alert.alert(
        'Thank you for using my app',
        "Unlike similar apps, I'm not going to annoy you with ads, but I'd appreciate if you can rate the app and maybe write a short review :)",
        [
          {
            text: 'No thanks',
            onPress: () => {
              Analytics.trackEvent('RateUS request declined')
              setRated(true)
              RNWhatsAppStickers.send(identifier, title)
            },
            style: 'cancel',
          },
          {
            text: 'Rate and continue',
            onPress: () => {
              Analytics.trackEvent('RateUS request accepted')
              const options = {
                GooglePackageName: 'com.aleksefo.wastickers',
              }
              Rate.rate(options, success => {
                if (success) {
                  Analytics.trackEvent('RateUS request succeeded')
                }
              })
              setRated(true)
            },
          },
        ],
        { cancelable: false },
      )
    } else {
      Analytics.trackEvent('StickerPack activated ' + title)
      return RNWhatsAppStickers.send(identifier, title)
    }
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {data.map(item => (
        <Sticker item={item} key={item} />
      ))}
      <Button
        icon={isWhatsAppAvailable ? 'pluscircleo' : 'exclamationcircleo'}
        onPress={sendStickers}
        disabled={!isWhatsAppAvailable}
      />
    </View>
  )
}

export default StickerCard
