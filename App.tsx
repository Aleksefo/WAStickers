import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import RNWhatsAppStickers from 'react-native-whatsapp-stickers'
import colors from './src/values/colors'
import StickerCard from './src/components/StickerCard'
import stickerData from './src/values/stickerData'
import Accordion from 'react-native-collapsible/Accordion'

const App = () => {
  const [isWhatsAppAvailable, setIsWhatsAppAvailable] = useState(false)
  const [activeSection, setActiveSection] = useState([0])

  useEffect(() => {
    RNWhatsAppStickers.isWhatsAppAvailable()
      .then(isWhatsAppAvailable => setIsWhatsAppAvailable(isWhatsAppAvailable))
      .catch(e => console.log(e))
  }, [])

  const sendStickers = () => {
    return RNWhatsAppStickers.send('pretoria1', 'Elon Musk #1')
  }

  const renderSectionTitle = section => {
    console.log('App, renderSectionTitle', section)
    return (
      <View style={{ backgroundColor: colors.primary }}>
        <Text>Title {section.title}</Text>
        <Text>Title {section.author}</Text>
        <Text>Title {section.size}</Text>
      </View>
    )
  }
  const renderHeader = section => {
    return (
      <View>
        <Text>Header {section.title}</Text>
      </View>
    )
  }
  const renderContent = section => {
    return (
      <View>
        <Text>Content {section.data}</Text>
      </View>
    )
  }
  const updateSections = activeSection => setActiveSection(activeSection)

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: colors.background,
      }}
    >
      <StickerCard data={stickerData[0].data} />
      <StickerCard data={stickerData[1].data} />
      <Accordion
        activeSections={activeSection}
        sections={stickerData}
        renderSectionTitle={renderSectionTitle}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
      />
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={sendStickers}
          hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
          disabled={!isWhatsAppAvailable}
          style={{
            backgroundColor: isWhatsAppAvailable ? colors.accent : 'gray',
          }}
        >
          {isWhatsAppAvailable ? <Text>Click Me</Text> : <Text>Not</Text>}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App
