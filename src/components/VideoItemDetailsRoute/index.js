import {Component} from 'react'

import ReactPlayer from 'react-player'

import {formatDistanceToNowStrict} from 'date-fns'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'

import MenuItems from '../MenuItems'

import {
  HomeSection,
  HomeLeftSection,
  LoaderContainer,
  FailureSection,
  FailureImage,
  FailureHeader,
  FailurePara,
  RetryButton,
} from '../HomeRoute/styledComponents'

import {
  VideoItemDetailsDiv,
  HomeRightSection,
  VideoItemDetailsSection,
  VideoTitle,
  VideoSubSection,
  VideoPublishedViewsSection,
  VideoViews,
  SpanDot,
  VideoLikeDislikeAddSection,
  LikeDislikeButton,
  VideoLikeLogo,
  VideoLikeText,
  VideoDislikeText,
  VideoSaveText,
  VideoDislikeLogo,
  VideoSaveLogo,
  Separator,
  VideoChannelSection,
  VideoChannelProfileImage,
  VideoChannelTextSection,
  VideoChannelName,
  VideoChannelSubscribers,
  VideoDescription,
} from './styledComponents'

import Header from '../Header'

const outputStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class VideoItemDetailsRoute extends Component {
  state = {
    resultView: outputStatus.initial,
    videoItemObj: {},
    ChannelObj: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoItemDetailsSection()
  }

  likeClicked = () => {
    const {isDisliked} = this.state

    if (isDisliked === true) {
      this.setState({isLiked: true, isDisliked: false})
    } else {
      this.setState(prev => ({isLiked: !prev.isLiked}))
    }
  }

  dislikeClicked = () => {
    const {isLiked} = this.state

    if (isLiked === true) {
      this.setState({isLiked: false, isDisliked: true})
    } else {
      this.setState(prev => ({isDisliked: !prev.isDisliked}))
    }
  }

  getVideoItemDetailsSection = async () => {
    this.setState({resultView: outputStatus.in_progress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(videoItemDetailsApiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const modifiedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        description: data.video_details.description,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: formatDistanceToNowStrict(
          new Date(data.video_details.published_at),
        ),
        videoUrl: data.video_details.video_url,
        channel: data.video_details.channel,
      }

      const modifiedChannel = {
        name: modifiedData.channel.name,
        profileImageUrl: modifiedData.channel.profile_image_url,
        subscriberCount: modifiedData.channel.subscriber_count,
      }

      this.setState({
        videoItemObj: modifiedData,
        ChannelObj: modifiedChannel,
        resultView: outputStatus.success,
      })
    } else {
      this.setState({resultView: outputStatus.failure})
    }
  }

  retryButton = () => {
    this.getVideoItemDetailsSection()
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
              We are having some trouble to complete your request. Please try
              again.
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
        const {lightTheme, savedVideosList, onSaveVideo, videoSaved} = value
        const {videoItemObj, ChannelObj, isLiked, isDisliked} = this.state

        const onSaveClicked = () => {
          onSaveVideo(videoItemObj)
        }

        const saveText =
          videoSaved &&
          savedVideosList.some(eachVideo => eachVideo.id === videoItemObj.id)
            ? 'Saved'
            : 'Save'

        const saveColor =
          videoSaved &&
          savedVideosList.some(eachVideo => eachVideo.id === videoItemObj.id)

        const {
          title,
          description,
          viewCount,
          publishedAt,
          videoUrl,
        } = videoItemObj

        const {name, profileImageUrl, subscriberCount} = ChannelObj

        return (
          <VideoItemDetailsSection lightTheme={lightTheme}>
            <ReactPlayer url={videoUrl} width="100%" height="60%" />
            <VideoTitle lightTheme={lightTheme}>{title}</VideoTitle>
            <VideoSubSection>
              <VideoPublishedViewsSection>
                <VideoViews>{viewCount} views</VideoViews>
                <SpanDot>.</SpanDot>
                <VideoViews> {publishedAt} ago</VideoViews>
              </VideoPublishedViewsSection>
              <VideoLikeDislikeAddSection>
                <LikeDislikeButton onClick={this.likeClicked}>
                  <VideoLikeLogo isLiked={isLiked} />
                  <VideoLikeText isLiked={isLiked}>Like</VideoLikeText>
                </LikeDislikeButton>
                <LikeDislikeButton onClick={this.dislikeClicked}>
                  <VideoDislikeLogo isDisliked={isDisliked} />
                  <VideoDislikeText isDisliked={isDisliked}>
                    Dislike
                  </VideoDislikeText>
                </LikeDislikeButton>
                <LikeDislikeButton onClick={onSaveClicked}>
                  <VideoSaveLogo saveColor={saveColor} />
                  <VideoSaveText saveColor={saveColor}>
                    {saveText}
                  </VideoSaveText>
                </LikeDislikeButton>
              </VideoLikeDislikeAddSection>
            </VideoSubSection>
            <Separator lightTheme={lightTheme} />
            <VideoChannelSection>
              <VideoChannelProfileImage
                src={profileImageUrl}
                alt="channel logo"
              />
              <VideoChannelTextSection>
                <VideoChannelName lightTheme={lightTheme}>
                  {name}
                </VideoChannelName>
                <VideoChannelSubscribers>
                  {subscriberCount} subscribers
                </VideoChannelSubscribers>
                <VideoDescription lightTheme={lightTheme}>
                  {description}
                </VideoDescription>
              </VideoChannelTextSection>
            </VideoChannelSection>
          </VideoItemDetailsSection>
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
            <VideoItemDetailsDiv
              lightTheme={theme}
              data-testid="videoItemDetails"
            >
              <Header onChangeTheme={onChangeTheme} lightTheme={theme} />
              <HomeSection>
                <HomeLeftSection>
                  <MenuItems />
                </HomeLeftSection>
                <HomeRightSection>{this.switchRender()}</HomeRightSection>
              </HomeSection>
            </VideoItemDetailsDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
