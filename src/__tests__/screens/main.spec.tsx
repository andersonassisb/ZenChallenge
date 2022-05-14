import React from 'react'
import { render } from '@testing-library/react-native'

import Main from '../../screens/main'

const mockedDispatch = jest.fn()

jest.mock('@react-navigation/native', () => {
  const navigation = jest.requireActual('@react-navigation/native')
  return {
    ...navigation,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  }
})

describe('Testing screens rendering', () => {
  beforeEach(() => {
    mockedDispatch.mockClear()
  })

  test('it should render the Main screen correctly', () => {
    const { debug } = render(<Main />)
    debug()
  })

  test('it should render the feelings list', () => {
    const { getByTestId } = render(<Main />)
    const feelingsList = getByTestId('feelings-list')
    expect(feelingsList).toBeTruthy()
  })
})
