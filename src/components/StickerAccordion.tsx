import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import stickerData from '../values/stickerData'
import colors from '../values/colors'
import StickerCard from './StickerCard'

const StickerAccordion = props => {
  const [activeSection, setActiveSection] = useState([0])

  const renderSectionTitle = section => {
    console.log('App, renderSectionTitle', section)
    return (
      <View style={{ backgroundColor: 'pink', flexDirection: 'row' }}>
        <Text>{section.title}</Text>
        <Text>{section.author}</Text>
        <Text>{section.size}</Text>
        <Text>{section.data.length}</Text>
      </View>
    )
  }
  const renderHeader = section => {
    return (
      <View>
        <StickerCard data={section.data} />
      </View>
    )
  }
  const renderContent = section => {
    return (
      <View>
        <StickerCard data={section.data} />
      </View>
    )
  }
  const updateSections = activeSection => setActiveSection(activeSection)

  return (
    <Accordion
      activeSections={activeSection}
      sections={stickerData}
      renderSectionTitle={renderSectionTitle}
      renderHeader={renderHeader}
      renderContent={renderContent}
      onChange={updateSections}
    />
  )
}

const s = StyleSheet.create({
  container: {},
})

export default StickerAccordion
