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
            // flex: 1,
            backgroundColor: 'red',
          }}
        />
      ))}
      <TouchableOpacity
        onPress={sendStickers}
        hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
        style={{
          backgroundColor: isWhatsAppAvailable ? colors.accent : 'gray',
          // flex: 1,
          width: stickerSize,
          height: stickerSize,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        disabled={!isWhatsAppAvailable}
      >
        {isWhatsAppAvailable ? (
          <Icon name="pluscircleo" size={30} color="#900" />
        ) : (
          <Icon name="questioncircleo" size={30} color="#900" />
        )}
      </TouchableOpacity>
    </View>
  )
}

const s = StyleSheet.create({
  container: {},
})

export default StickerCard
