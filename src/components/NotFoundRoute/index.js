import {Component} from 'react'

import Header from '../Header'

import ThemeContext from '../../context/ThemeContext'

import MenuItems from '../MenuItems'

import {
  HomeDiv,
  HomeSection,
  HomeLeftSection,
  HomeRightSection,
} from '../HomeRoute/styledComponents'

import {
  NoSavedItemsImage,
  NoSavedSection,
  NoSavedItemsHeader,
  NoSavedItemsPara,
} from './styledComponents'

class NotFoundRoute extends Component {
  clickHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  clickTrending = () => {
    const {history} = this.props
    history.replace('/trending')
  }

  clickGaming = () => {
    const {history} = this.props
    history.replace('/gaming')
  }

  clickSavedVideos = () => {
    const {history} = this.props
    history.replace('/saved-videos')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme, onChangeTheme} = value
          const theme = lightTheme

          const notFoundImageUrl = lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

          return (
            <HomeDiv lightTheme={theme}>
              <Header onChangeTheme={onChangeTheme} lightTheme={theme} />
              <HomeSection>
                <HomeLeftSection>
                  <MenuItems />
                </HomeLeftSection>
                <HomeRightSection>
                  <NoSavedSection lightTheme={theme}>
                    <NoSavedItemsImage src={notFoundImageUrl} alt="not found" />
                    <NoSavedItemsHeader lightTheme={lightTheme}>
                      Page Not Found
                    </NoSavedItemsHeader>
                    <NoSavedItemsPara>
                      we are sorry, the page you requested could not be found.
                    </NoSavedItemsPara>
                  </NoSavedSection>
                </HomeRightSection>
              </HomeSection>
            </HomeDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFoundRoute
