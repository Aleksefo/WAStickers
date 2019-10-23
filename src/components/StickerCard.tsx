import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import colors from '../values/colors'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'

const StickerCard = ({ data, isWhatsAppAvailable }) => {
  const { width } = useWindowDimensions()

  const stickerSize = Math.floor(width / 6.5)

  const sendStickers = () => {
    return RNWhatsAppStickers.send('pretoria1', 'Elon Musk #1')
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {data.map(item => (
        <Image
          source={{ uri: `asset:/pretoria1/${item}.webp` }}
          style={{
            width: stickerSize,
            height: stickerSize,
          }}
          key={item}
        />
      ))}
      <TouchableOpacity
        onPress={sendStickers}
        hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
        style={{
          width: stickerSize,
          height: stickerSize,
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
