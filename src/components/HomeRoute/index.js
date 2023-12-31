import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import HomeSectionVideoItem from '../HomeSectionVideoItem'

import ThemeContext from '../../context/ThemeContext'

import MenuItems from '../MenuItems'

import {
  HomeDiv,
  HomeSection,
  HomeLeftSection,
  HomeRightSection,
  HomeBannerSection,
  BannerTopSection,
  BannerSectionClose,
  CloseButton,
  BannerWebsiteLogo,
  BannerText,
  GetItNowButton,
  NxtWatchSection,
  SearchContainer,
  SearchInput,
  SearchLogoBox,
  SearchLogo,
  VideosUl,
  LoaderContainer,
  FailureSection,
  FailureImage,
  FailureHeader,
  FailurePara,
  RetryButton,
} from './styledComponents'

import Header from '../Header'

const outputStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class HomeRoute extends Component {
  state = {
    resultView: outputStatus.initial,
    videosList: [],
    input: '',
    closeClicked: false,
  }

  componentDidMount() {
    this.getVideosSection()
  }

  onClickClose = () => {
    this.setState({closeClicked: true})
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onClickEnter = event => {
    if (event.key === 'Enter') {
      this.getVideosSection()
    }
  }

  onClickSearch = () => {
    this.getVideosSection()
  }

  getVideosSection = async () => {
    this.setState({resultView: outputStatus.in_progress})
    const {input} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${input}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try{
    const response = await fetch(homeVideosApiUrl, options)

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
        videosList: modifiedData,
        resultView: outputStatus.success,
      })
    } else {
      this.setState({resultView: outputStatus.failure})
    }
    }
    catch(error){
      console.error('Error during API Call :', error)
      this.setState({resultView: outputStatus.failure})
  }

  retryButton = () => this.getVideosSection()

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
            <RetryButton type="button" onClick={this.retryButton}>
              Retry
            </RetryButton>
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
        const {videosList} = this.state
        const videosListLength = videosList.length

        return (
          <>
            {videosListLength !== 0 ? (
              <VideosUl>
                {videosList.map(eachVideo => (
                  <HomeSectionVideoItem
                    key={eachVideo.id}
                    videoDetails={eachVideo}
                    lightTheme={theme}
                  />
                ))}
              </VideosUl>
            ) : (
              <FailureSection lightTheme={theme}>
                <FailureImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <FailureHeader lightTheme={lightTheme}>
                  No Search results found
                </FailureHeader>
                <FailurePara>
                  Try different key words or remove search filter
                </FailurePara>
                <RetryButton type="button" onClick={this.retryButton}>
                  Retry
                </RetryButton>
              </FailureSection>
            )}
          </>
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

          const {input, closeClicked} = this.state

          return (
            <HomeDiv lightTheme={theme} data-testid="home">
              <Header onChangeTheme={onChangeTheme} lightTheme={theme} />
              <HomeSection>
                <HomeLeftSection>
                  <MenuItems />
                </HomeLeftSection>
                <HomeRightSection>
                  {closeClicked ? null : (
                    <HomeBannerSection data-testid="banner">
                      <BannerTopSection>
                        <BannerWebsiteLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CloseButton
                          onClick={this.onClickClose}
                          data-testid="close"
                        >
                          <BannerSectionClose />
                        </CloseButton>
                      </BannerTopSection>

                      <BannerText>
                        Buy Nxt Watch Premium paid plans with UPI
                      </BannerText>
                      <GetItNowButton>GET IT NOW</GetItNowButton>
                    </HomeBannerSection>
                  )}

                  <NxtWatchSection lightTheme={theme}>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        lightTheme={theme}
                        value={input}
                        onChange={this.onChangeInput}
                        onKeyDown={this.onClickEnter}
                      />
                      <SearchLogoBox
                        type="button"
                        data-testid="searchButton"
                        lightTheme={theme}
                        onClick={this.onClickSearch}
                      >
                        <SearchLogo />
                      </SearchLogoBox>
                    </SearchContainer>
                    {this.switchRender()}
                  </NxtWatchSection>
                </HomeRightSection>
              </HomeSection>
            </HomeDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeRoute
