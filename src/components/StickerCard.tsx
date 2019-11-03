import React from 'react'
import { View } from 'react-native'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'
import Sticker from './Sticker'
import Button from './Button'

const StickerCard = ({ data, title, identifier, isWhatsAppAvailable }) => {
  const sendStickers = () => {
    return RNWhatsAppStickers.send(identifier, title)
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
