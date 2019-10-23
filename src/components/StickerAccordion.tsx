import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import stickerData from '../values/stickerData'
import colors from '../values/colors'
import StickerCard from './StickerCard'

const StickerAccordion = props => {
  const [activeSection, setActiveSection] = useState([0])
  const { width } = useWindowDimensions()
  const stickerSize = Math.floor(width / 6.5)
  console.log('StickerAccordion, StickerAccordion', stickerSize)
  const renderSectionTitle = section => {
    console.log('App, renderSectionTitle', section)
    return (
      <View style={st.sectionTitle}>
        <Text style={[st.sectionText, st.sectionTextPrimary]}>
          {section.title}
        </Text>
        <Text style={st.sectionText}>{section.author}</Text>
        <Text style={st.sectionText}>{section.data.length} stickers</Text>
        <Text style={st.sectionText}>{section.size}</Text>
      </View>
    )
  }
  const renderHeader = section => {
    return (
      <View>
        <StickerCard
          data={section.data.slice(0, 5)}
          isWhatsAppAvailable={props.isWhatsAppAvailable}
        />
      </View>
    )
  }
  const renderContent = section => {
    return (
      <View
        style={{
          // backgroundColor: 'blue',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {/*<StickerCard data={section.data.slice(5)} />*/}
        {section.data.slice(5).map(item => (
          <Image
            source={{ uri: `asset:/pretoria1/${item}.webp` }}
            style={{
              width: stickerSize,
              height: stickerSize,
              // backgroundColor: 'red',
            }}
            key={item}
          />
        ))}
      </View>
    )
  }
  const renderFooter = section => {
    return <View style={st.footer} />
  }
  const updateSections = activeSection => setActiveSection(activeSection)

  return (
    <Accordion
      activeSections={activeSection}
      sections={stickerData}
      renderSectionTitle={renderSectionTitle}
      renderHeader={renderHeader}
      renderContent={renderContent}
      renderFooter={renderFooter}
      onChange={updateSections}
    />
  )
}

const st = StyleSheet.create({
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  sectionText: { color: colors.textSecondary, marginEnd: 7 },
  sectionTextPrimary: { color: colors.text, fontSize: 18 },
  footer: {
    height: 1,
    backgroundColor: colors.disabled,
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
  },
})

export default StickerAccordion
