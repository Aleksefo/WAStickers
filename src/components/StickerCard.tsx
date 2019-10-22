import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native'

const StickerCard = ({ data }) => {
  const Item = ({ picture }) => (
    <>
      <Image
        source={{ uri: `asset:/pretoria1/${picture}.webp` }}
        style={{ width: 64, height: 64 }}
      />
      <Text>{}</Text>
    </>
  )
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item picture={item} />}
          keyExtractor={(item, index) => index.toString()}
          style={{
            borderWidth: 1,
            borderColor: 'red',
          }}
          horizontal
        />
        <TouchableOpacity
          onPress={console.log}
          hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
          style={{
            backgroundColor: 'green',
          }}
        >
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {},
})

export default StickerCard
