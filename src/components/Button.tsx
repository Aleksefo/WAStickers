import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import colors from '../values/colors'
import Theme from '../values/Theme'

const Button = ({ onPress, icon, style = {}, disabled = false }) => (
  <TouchableOpacity
    onPress={onPress}
    hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
    style={[st.button, style]}
    disabled={disabled}
  >
    <Icon
      name={icon}
      size={40}
      color={disabled ? colors.error : colors.accent}
    />
  </TouchableOpacity>
)

const st = StyleSheet.create({
  button: {
    width: Theme.stickerSize - 10,
    height: Theme.stickerSize - 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Button
