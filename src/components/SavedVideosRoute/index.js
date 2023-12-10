import {Component} from 'react'

import Header from '../Header'

import ThemeContext from '../../context/ThemeContext'

import SavedVideoItem from '../SavedVideoItem'

import MenuItems from '../MenuItems'

import {
  HomeSection,
  HomeLeftSection,
  HomeRightSection,
} from '../HomeRoute/styledComponents'

import {
  NxtWatchSection,
  TrendingVideosUl,
  TrendingBannerSection,
  TrendingLogoBox,
  TrendingText,
} from '../TrendingRoute/styledComponents'

import {
  SavedVideosDiv,
  GamingLogo,
  NoSavedItemsImage,
  NoSavedSection,
  NoSavedItemsHeader,
  NoSavedItemsPara,
} from './styledComponents'

class SavedVideosRoute extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme, onChangeTheme, savedVideosList} = value
          const theme = lightTheme

          const savedListLength = savedVideosList.length

          return (
            <SavedVideosDiv lightTheme={theme} data-testid="savedVideos">
              <Header onChangeTheme={onChangeTheme} lightTheme={theme} />
              <HomeSection>
                <HomeLeftSection>
                  <MenuItems />
                </HomeLeftSection>
                <HomeRightSection>
                  {savedListLength !== 0 ? (
                    <>
                      <TrendingBannerSection lightTheme={theme}>
                        <TrendingLogoBox lightTheme={theme}>
                          <GamingLogo />
                        </TrendingLogoBox>
                        <TrendingText lightTheme={theme}>
                          Saved Videos
                        </TrendingText>
                      </TrendingBannerSection>
                      <NxtWatchSection lightTheme={theme}>
                        <TrendingVideosUl>
                          {savedVideosList.map(eachVideo => (
                            <SavedVideoItem
                              key={eachVideo.id}
                              videoDetails={eachVideo}
                              lightTheme={theme}
                            />
                          ))}
                        </TrendingVideosUl>
                      </NxtWatchSection>
                    </>
                  ) : (
                    <NoSavedSection lightTheme={theme}>
                      <NoSavedItemsImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <NoSavedItemsHeader lightTheme={lightTheme}>
                        No saved videos found
                      </NoSavedItemsHeader>
                      <NoSavedItemsPara>
                        You can save your videos while watching them
                      </NoSavedItemsPara>
                    </NoSavedSection>
                  )}
                </HomeRightSection>
              </HomeSection>
            </SavedVideosDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideosRoute
