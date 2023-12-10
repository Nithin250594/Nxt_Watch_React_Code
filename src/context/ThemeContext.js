import React from 'react'

const ThemeContext = React.createContext({
  lightTheme: true,
  onChangeTheme: () => {},
  savedVideosList: [],
  onSaveVideo: () => {},
  videoSaved: false,
  handleToggle: () => {},
  isMenuOpen: false,
  activeMenuItem: 'HOME',
  setActiveMenuItem: () => {},
})

export default ThemeContext
