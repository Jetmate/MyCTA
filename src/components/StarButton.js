import React from 'react'

import ImageButton from './ImageButton'
import { colors } from 'src/styles/constants'

export default function StarButton ({ onPress }) {
  return (
    <ImageButton
      source={require('mycta/assets/star.png')}
      onPress={onPress}
      style={{ backgroundColor: colors.yellow }}
    />
  )
}
