import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import colors from '../values/colors'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'
import Sticker from './Sticker'
import Theme from '../values/Theme'

const StickerCard = ({ data, isWhatsAppAvailable }) => {
  const stickerSize = Math.floor(Theme.w / 6.5)

  const sendStickers = () => {
    return RNWhatsAppStickers.send('pretoria1', 'Elon Musk #1')
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {data.map(item => (
        <Sticker item={item} key={item} />
      ))}
      <TouchableOpacity
        onPress={sendStickers}
        hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
        style={{
          width: stickerSize - 10,
          height: stickerSize - 10,
          margin: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        disabled={!isWhatsAppAvailable}
      >
        {isWhatsAppAvailable ? (
          <Icon name="pluscircleo" size={30} color={colors.accent} />
        ) : (
          <Icon name="questioncircleo" size={30} color={colors.accent} />
        )}
      </TouchableOpacity>
    </View>
  )
}

const s = StyleSheet.create({
  container: {},
})

export default StickerCard
