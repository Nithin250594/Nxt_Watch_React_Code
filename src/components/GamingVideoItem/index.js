import {
  EachGamingLink,
  GamingVideoListItem,
  GamingVideoImageUrl,
  GamingVideoTextSection,
  GamingVideoTitle,
  GameVideoViewsText,
} from './styledComponents'

const GamingVideoItem = props => {
  const {gameVideoDetails, lightTheme} = props
  const {id, title, thumbnailUrl, viewCount} = gameVideoDetails

  return (
    <GamingVideoListItem key={id}>
      <EachGamingLink to={`/videos/${id}`} key={id}>
        <GamingVideoImageUrl src={thumbnailUrl} alt="video thumbnail" />
        <GamingVideoTextSection>
          <GamingVideoTitle lightTheme={lightTheme}>{title}</GamingVideoTitle>
          <GameVideoViewsText>
            {viewCount} Watching Worldwide
          </GameVideoViewsText>
        </GamingVideoTextSection>
      </EachGamingLink>
    </GamingVideoListItem>
  )
}

export default GamingVideoItem
