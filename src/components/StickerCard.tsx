import React from 'react'
import { View } from 'react-native'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'
import Sticker from './Sticker'
import Button from './Button'

const StickerCard = ({ data }) => {
  const sendStickers = () => {
    return RNWhatsAppStickers.send('pretoria1', 'Elon Musk #1')
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {data.map(item => (
        <Sticker item={item} key={item} />
      ))}
      <Button icon={'pluscircleo'} onPress={sendStickers} />
    </View>
  )
}

export default StickerCard
