import {formatDistanceToNowStrict} from 'date-fns'

import {
  EachVideoItem,
  EachLink,
  VideoImageUrl,
  VideoTextSection,
  VideoChannelImageSection,
  VideoChannelImage,
  VideoChannelTextSection,
  VideoTitle,
  VideoChannelName,
  SpanDot,
  VideoViewsAndPublished,
  VideoViewsPublishedText,
} from './styledComponents'

const HomeSectionVideoItem = props => {
  const {videoDetails, lightTheme} = props
  const {
    id,
    title,
    channel,
    publishedAt,
    thumbnailUrl,
    viewCount,
  } = videoDetails

  const {name, profileImageUrl} = channel

  const distanceToNow = formatDistanceToNowStrict(new Date(publishedAt))

  return (
    <EachVideoItem key={id}>
      <EachLink to={`/videos/${id}`} key={id}>
        <VideoImageUrl src={thumbnailUrl} alt="video thumbnail" />
        <VideoTextSection>
          <VideoChannelImageSection>
            <VideoChannelImage src={profileImageUrl} alt="channel logo" />
          </VideoChannelImageSection>
          <VideoChannelTextSection>
            <VideoTitle lightTheme={lightTheme}>{title}</VideoTitle>

            <VideoChannelName>{name}</VideoChannelName>
            <VideoViewsAndPublished>
              <VideoViewsPublishedText>
                {viewCount} views
              </VideoViewsPublishedText>
              <SpanDot>.</SpanDot>
              <VideoViewsPublishedText>
                {distanceToNow} ago
              </VideoViewsPublishedText>
            </VideoViewsAndPublished>
          </VideoChannelTextSection>
        </VideoTextSection>
      </EachLink>
    </EachVideoItem>
  )
}

export default HomeSectionVideoItem
