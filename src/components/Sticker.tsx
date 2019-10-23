import React from 'react'
import { StyleSheet, Image } from 'react-native'
import Theme from '../values/Theme'

const Sticker = ({ item }) => {
  return <Image source={{ uri: `asset:/${item}.webp` }} style={st.image} />
}

const st = StyleSheet.create({
  image: {
    width: Theme.stickerSize - 10,
    height: Theme.stickerSize - 10,
    margin: 5,
  },
})

export default Sticker
