import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import TrendingVideoItem from '../TrendingVideoItem'

import ThemeContext from '../../context/ThemeContext'

import MenuItems from '../MenuItems'

import {
  HomeSection,
  HomeLeftSection,
  HomeRightSection,
  LoaderContainer,
  FailureSection,
  FailureImage,
  FailureHeader,
  FailurePara,
  RetryButton,
} from '../HomeRoute/styledComponents'

import {
  TrendingDiv,
  TrendingBannerSection,
  NxtWatchSection,
  TrendingLogoBox,
  TrendingLogo,
  TrendingText,
  TrendingVideosUl,
} from './styledComponents'

const outputStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {trendingVideosList: [], resultView: outputStatus.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({resultView: outputStatus.in_progress})

    const jwtToken = Cookies.get('jwt_token')

    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    
    try{
    const response = await fetch(trendingVideosApiUrl, options)

    if (response.ok === true) {
      const data = await response.json()

      const modifiedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        trendingVideosList: modifiedData,
        resultView: outputStatus.success,
      })
    } else {
      this.setState({resultView: outputStatus.failure})
    }
  } catch (error){
    console.error('Error during trending details API call:', error)
    this.setState({resultView: outputStatus.failure})
    }
  }

  retryButton = () => {
    this.getTrendingVideos()
  }

  loadingRender = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="80" width="80" />
    </LoaderContainer>
  )

  failureRender = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        const theme = lightTheme

        const failureImageUrl = lightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <FailureSection lightTheme={theme}>
            <FailureImage src={failureImageUrl} alt="failure view" />
            <FailureHeader lightTheme={lightTheme}>
              Oops! Something Went Wrong
            </FailureHeader>
            <FailurePara>
              We are having some trouble to complete your request.
              <br />
              Please try again.
            </FailurePara>
            <RetryButton onClick={this.retryButton}>Retry</RetryButton>
          </FailureSection>
        )
      }}
    </ThemeContext.Consumer>
  )

  successRender = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        const theme = lightTheme
        const {trendingVideosList} = this.state
        return (
          <TrendingVideosUl>
            {trendingVideosList.map(eachVideo => (
              <TrendingVideoItem
                key={eachVideo.id}
                videoDetails={eachVideo}
                lightTheme={theme}
              />
            ))}
          </TrendingVideosUl>
        )
      }}
    </ThemeContext.Consumer>
  )

  switchRender = () => {
    const {resultView} = this.state

    switch (resultView) {
      case outputStatus.success:
        return this.successRender()
      case outputStatus.in_progress:
        return this.loadingRender()
      case outputStatus.failure:
        return this.failureRender()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme, onChangeTheme} = value
          const theme = lightTheme

          return (
            <TrendingDiv lightTheme={theme} data-testid="trending">
              <Header onChangeTheme={onChangeTheme} lightTheme={theme} />
              <HomeSection>
                <HomeLeftSection>
                  <MenuItems />
                </HomeLeftSection>
                <HomeRightSection>
                  <TrendingBannerSection lightTheme={theme}>
                    <TrendingLogoBox lightTheme={theme}>
                      <TrendingLogo />
                    </TrendingLogoBox>
                    <TrendingText lightTheme={theme}>Trending</TrendingText>
                  </TrendingBannerSection>
                  <NxtWatchSection lightTheme={theme}>
                    {this.switchRender()}
                  </NxtWatchSection>
                </HomeRightSection>
              </HomeSection>
            </TrendingDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingRoute
