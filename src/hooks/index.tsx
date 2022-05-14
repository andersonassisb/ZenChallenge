import React, { ReactChild, ReactChildren } from 'react'
import { MainProvider } from './main'

interface IAppProvider {
  children: ReactChild | ReactChildren;
}

const AppProvider: React.FC<IAppProvider> = ({ children }) => (
  <MainProvider>
    {children}
  </MainProvider>
)

export default AppProvider
