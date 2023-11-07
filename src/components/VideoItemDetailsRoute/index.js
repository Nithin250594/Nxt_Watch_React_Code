import {Component} from 'react'

import ReactPlayer from 'react-player'

import {formatDistanceToNowStrict} from 'date-fns'

import Cookies from 'js-cookie'

import {Loader} from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeSection,
  HomeLeftSection,
  ContactUsSection,
  ContactUsTitle,
  SocialMediaLogos,
  SocialMediaLogo,
  ContactUsPara,
  LoaderContainer,
} from '../HomeRoute/styledComponents'

import {
  VideoItemDetailsDiv,
  EachLink,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedIcon,
  IconTitle,
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

class VideoItemDetailsRoute extends Component {
  state = {
    isLoading: false,
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
    this.setState({isLoading: true})

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
      isLoading: false,
    })
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            lightTheme,
            onChangeTheme,
            savedVideosList,
            onSaveVideo,
            videoSaved,
          } = value
          const {
            videoItemObj,
            ChannelObj,
            isLiked,
            isDisliked,
            isLoading,
          } = this.state

          const theme = lightTheme

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
            <VideoItemDetailsDiv
              lightTheme={theme}
              data-testid="videoItemDetails"
            >
              <Header onChangeTheme={onChangeTheme} lightTheme={theme} />
              <HomeSection>
                <HomeLeftSection>
                  <div>
                    <EachLink to="/" lightTheme={theme}>
                      <HomeIcon />
                      <IconTitle lightTheme={theme}>Home</IconTitle>
                    </EachLink>
                    <EachLink to="/trending">
                      <TrendingIcon />
                      <IconTitle lightTheme={theme}>Trending</IconTitle>
                    </EachLink>
                    <EachLink to="/gaming">
                      <GamingIcon />
                      <IconTitle lightTheme={theme}>Gaming</IconTitle>
                    </EachLink>
                    <EachLink to="/saved-videos">
                      <SavedIcon />
                      <IconTitle lightTheme={theme}>Saved videos</IconTitle>
                    </EachLink>
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
                  <VideoItemDetailsSection lightTheme={lightTheme}>
                    <ReactPlayer url={videoUrl} width="100%" height="65%" />
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
                </HomeRightSection>
              </HomeSection>
            </VideoItemDetailsDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
