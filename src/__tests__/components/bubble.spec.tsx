import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import Bubble from '../../components/bubble'

describe('Testing components rendering', () => {
  const emoji = '🧡'
  const description = 'heart'
  const onPress = jest.fn()

  test('it should render the Bubble component correctly', () => {
    beforeEach(() => {
      onPress.mockClear()
    })

    const { findByText } = render(
      <Bubble emoji={emoji} description={description} onPress={onPress} />
    )
    const bubble = findByText('heart')
    expect(bubble).toBeTruthy()
  })

  test('it should fire the onPress event on being pressed', () => {
    beforeEach(() => {
      onPress.mockClear()
    })

    const { getByTestId } = render(
      <Bubble emoji={emoji} description={description} onPress={onPress} />
    )

    const bubble = getByTestId('bubble-button')
    expect(bubble).toBeTruthy()

    fireEvent.press(bubble)

    expect(onPress).toHaveBeenCalledTimes(1)
  })
})
