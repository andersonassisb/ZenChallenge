import React, {
  createContext,
  useState,
  useContext,
  ReactChild,
  ReactChildren,
} from 'react'

interface EnumFeeling {
  emoji: string
  text: string
}

interface IMainContext {
  feelings: Array<EnumFeeling>
  setFeelings: Function
}

interface IMainProvider {
  children: ReactChild | ReactChildren
}

const MainContext = createContext<IMainContext>({
  feelings: [],
  setFeelings: () => {},
})

const MainProvider: React.FC<IMainProvider> = ({ children }) => {
  const [feelings, setFeelings] = useState<EnumFeeling[] | []>([])

  return (
    <MainContext.Provider value={{ feelings, setFeelings }}>
      {children}
    </MainContext.Provider>
  )
}

function useMainContext() {
  const context = useContext(MainContext)

  if (!context) {
    throw new Error('useMainContext must be used within an MainProvider')
  }
  return context
}

export { MainProvider, useMainContext }
