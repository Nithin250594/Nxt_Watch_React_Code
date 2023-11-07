import {Component} from 'react'

import Header from '../Header'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeDiv,
  HomeSection,
  HomeLeftSection,
  ContactUsSection,
  ContactUsTitle,
  SocialMediaLogos,
  SocialMediaLogo,
  ContactUsPara,
  HomeRightSection,
} from '../HomeRoute/styledComponents'

import {
  HomeIconSection,
  TrendingIconSection,
  GamingIconSection,
  SavedIconSection,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedIcon,
  HomeTitle,
  TrendingTitle,
  GamingTitle,
  SavedTitle,
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
                  <div>
                    <HomeIconSection as="button" onClick={this.clickHome}>
                      <HomeIcon />
                      <HomeTitle lightTheme={theme}>Home</HomeTitle>
                    </HomeIconSection>
                    <TrendingIconSection
                      as="button"
                      onClick={this.clickTrending}
                    >
                      <TrendingIcon />
                      <TrendingTitle lightTheme={theme}>Trending</TrendingTitle>
                    </TrendingIconSection>
                    <GamingIconSection as="button" onClick={this.clickGaming}>
                      <GamingIcon />
                      <GamingTitle lightTheme={theme}>Gaming</GamingTitle>
                    </GamingIconSection>
                    <SavedIconSection
                      as="button"
                      onClick={this.clickSavedVideos}
                      lightTheme={theme}
                    >
                      <SavedIcon />
                      <SavedTitle lightTheme={theme}>Saved videos</SavedTitle>
                    </SavedIconSection>
                  </div>
                  <ContactUsSection>
                    <ContactUsTitle lightTheme={theme}>
                      CONTACT US
                    </ContactUsTitle>
                    <SocialMediaLogos>
                      <SocialMediaLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                      <SocialMediaLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                      />
                      <SocialMediaLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                      />
                    </SocialMediaLogos>
                    <ContactUsPara lightTheme={theme}>
                      Enjoy! Now to see your channels and recommendations!
                    </ContactUsPara>
                  </ContactUsSection>
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
