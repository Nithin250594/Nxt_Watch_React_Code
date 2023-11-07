import {formatDistanceToNowStrict} from 'date-fns'

import {
  VideoChannelName,
  SpanDot,
} from '../HomeSectionVideoItem/styledComponents'

import {
  VideoTitle,
  TrendingVideoListItem,
  EachLink,
  TrendingVideoImageUrl,
  TrendingVideoTextSection,
  VideoViewsAndPublished,
  VideoViewsPublishedText,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {videoDetails, lightTheme} = props
  const {
    id,
    title,
    channel,
    publishedAt,
    thumbnailUrl,
    viewCount,
  } = videoDetails

  const {name} = channel

  const distanceToNow = formatDistanceToNowStrict(new Date(publishedAt))

  return (
    <EachLink to={`/videos/${id}`}>
      <TrendingVideoListItem key={id}>
        <TrendingVideoImageUrl src={thumbnailUrl} alt="video thumbnail" />
        <TrendingVideoTextSection>
          <VideoTitle lightTheme={lightTheme}>{title}</VideoTitle>
          <VideoChannelName>{name}</VideoChannelName>
          <VideoViewsAndPublished>
            <VideoViewsPublishedText>{viewCount} views</VideoViewsPublishedText>
            <SpanDot>.</SpanDot>
            <VideoViewsPublishedText>
              {distanceToNow} ago
            </VideoViewsPublishedText>
          </VideoViewsAndPublished>
        </TrendingVideoTextSection>
      </TrendingVideoListItem>
    </EachLink>
  )
}

export default TrendingVideoItem
