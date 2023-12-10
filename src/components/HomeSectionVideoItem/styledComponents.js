import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const EachVideoItem = styled.li`
  width: 30%;
  margin-bottom: 55px;
  @media screen and (max-width: 576px) {
    width: 48%;
    margin-bottom: 7%;
  }
  @media screen and (max-width: 768px) {
    width: 48%;
    margin-bottom: 7%;
  }
`

export const EachLink = styled(Link)`
  text-decoration-line: none;
`

export const VideoImageUrl = styled.img`
  width: 100%;
`

export const VideoTextSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`
export const VideoChannelImageSection = styled.div`
  width: 11%;
  margin-top: 15px;
  margin-right: 15px;
`

export const VideoChannelImage = styled.img`
  width: 100%;
`
export const VideoChannelTextSection = styled.div`
  width: 75%;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#475569' : '#ffffff')};
  font-family: 'Roboto';
  line-height: 1.5;
  margin-bottom: 5px;
  @media screen and (max-width: 576px) {
    font-size: 60%;
  }
  @media screen and (max-width: 768px) {
    font-size: 65%;
  }
`
export const VideoChannelName = styled(VideoTitle)`
  color: #64748b;
  margin-top: 0px;
  margin-bottom: 0px;
`

export const VideoViewsAndPublished = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  @media screen and (max-width: 420px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const SpanDot = styled.span`
  color: #64748b;
  font-weight: 800;
  font-size: 18px;
  @media screen and (max-width: 576px) {
    font-size: 80%;
  }
  @media screen and (max-width: 768px) {
    font-size: 80%;
  }
`
export const VideoViewsPublishedText = styled(VideoTitle)`
  color: #64748b;
`
