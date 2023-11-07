import React from 'react'

const ThemeContext = React.createContext({
  lightTheme: true,
  onChangeTheme: () => {},
  savedVideosList: [],
  onSaveVideo: () => {},
  videoSaved: false,
})

export default ThemeContext
