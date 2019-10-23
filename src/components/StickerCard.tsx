import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import colors from '../values/colors'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'
import Sticker from './Sticker'
import Theme from '../values/Theme'

const StickerCard = ({ data, isWhatsAppAvailable }) => {
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
        style={st.button}
        disabled={!isWhatsAppAvailable}
      >
        {isWhatsAppAvailable ? (
          <Icon name="pluscircleo" size={40} color={colors.accent} />
        ) : (
          <Icon name="questioncircleo" size={40} color={colors.accent} />
        )}
      </TouchableOpacity>
    </View>
  )
}

const st = StyleSheet.create({
  button: {
    width: Theme.stickerSize - 10,
    height: Theme.stickerSize - 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default StickerCard
