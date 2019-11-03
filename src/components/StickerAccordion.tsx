import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import stickerData from '../values/stickerData'
import colors from '../values/colors'
import StickerCard from './StickerCard'
import Sticker from './Sticker'

const StickerAccordion = props => {
  const [activeSection, setActiveSection] = useState([0])
  const renderSectionTitle = section => {
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
      <StickerCard
        data={section.data.slice(0, 5)}
        identifier={section.identifier}
        title={section.title}
        isWhatsAppAvailable={props.isWhatsAppAvailable}
      />
    )
  }
  const renderContent = section => {
    return (
      <View style={st.contentContainer}>
        {section.data.slice(5).map(item => (
          <Sticker item={item} key={item} />
        ))}
      </View>
    )
  }
  const renderFooter = () => {
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
      underlayColor={colors.chat}
      containerStyle={st.accordion}
    />
  )
}

const st = StyleSheet.create({
  accordion: { padding: 10, paddingBottom: 64 },
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
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})

export default StickerAccordion
