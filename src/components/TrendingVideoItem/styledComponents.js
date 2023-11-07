import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const TrendingVideoListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 50px;
  padding-bottom: 100px;
`

export const EachLink = styled(Link)`
  text-decoration-line: none;
`

export const TrendingVideoImageUrl = styled.img`
  width: 50%;
`

export const TrendingVideoTextSection = styled.div`
  width: 40%;
  margin-left: 20px;
`
export const VideoTitle = styled.p`
  font-size: 26px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#212121' : '#ffffff')};
  font-family: 'Roboto';
  line-height: 1.5;
  margin-bottom: 5px;
  margin-top: 0px;
`
export const VideoViewsAndPublished = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
`
export const VideoViewsPublishedText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #64748b;
  font-family: 'Roboto';
`
