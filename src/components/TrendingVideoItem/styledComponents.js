import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const TrendingVideoListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 50px;
  padding-bottom: 100px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding-left: 5px;
    padding-bottom: 20px;
  }
`

export const EachLink = styled(Link)`
  text-decoration-line: none;
`

export const TrendingVideoImageUrl = styled.img`
  width: 50%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const TrendingVideoTextSection = styled.div`
  width: 40%;
  margin-left: 20px;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 0px;
  }
`
export const VideoTitle = styled.p`
  font-size: 26px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#212121' : '#ffffff')};
  font-family: 'Roboto';
  line-height: 1.5;
  margin-bottom: 5px;
  margin-top: 0px;
  @media screen and (max-width: 576px) {
    font-size: 100%;
    margin-top: 8px;
  }
`
export const VideoViewsAndPublished = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  @media screen and (max-width: 576px) {
    width: 55%;
    flex-shrink: 3;
    flex-grow: -1;
  }
`
export const VideoViewsPublishedText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #64748b;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 88%;
  }
`
