import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {AiFillHome, AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

export const VideoItemDetailsDiv = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow-y: auto;
`

export const EachLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  border-width: 0px;
  width: 18vw;
  padding-left: 30px;
  text-decoration-line: none;
`

export const HomeIcon = styled(AiFillHome)`
  width: 21px;
  height: 21px;
  color: #7e858e;
  margin-right: 25px;
`
export const TrendingIcon = styled(HiFire)`
  width: 21px;
  height: 21px;
  color: #7e858e;
  margin-right: 25px;
`
export const GamingIcon = styled(SiYoutubegaming)`
  width: 21px;
  height: 21px;
  color: #7e858e;
  margin-right: 25px;
`
export const SavedIcon = styled(CgPlayListAdd)`
  width: 21px;
  height: 21px;
  color: #7e858e;
  margin-right: 25px;
`

export const IconTitle = styled.p`
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
`
export const HomeRightSection = styled.div`
  justify-content: flex-start;
  width: 82vw;
  height: 100vh;
  margin-top: 0px;
  overflow-y: auto;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const VideoItemDetailsSection = styled.div`
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#0f0f0f')};
  padding: 0px 20px 0px 20px;
  width: 100%;
  height: 130vh;
  @media screen and (max-width: 576px) {
    height: 60%;
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.lightTheme ? '0f0f0f' : '#cccccc')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 88%;
  }
`
export const VideoSubSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  @media screen and (max-width: 576px) {
    margin-top: 0px;
  }
`
export const VideoPublishedViewsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 17%;
  @media screen and (max-width: 576px) {
    width: 37%;
  }
`
export const SpanDot = styled.span`
  color: #64748b;
  font-weight: 800;
  font-size: 21px;
  margin-bottom: 8px;
`
export const VideoViews = styled.p`
  color: #64748b;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 68%;
  }
`

export const VideoLikeDislikeAddSection = styled.div`
  display: flex;
  align-items: center;
`

export const LikeDislikeButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border-width: 0px;
  display: flex;
  align-items: center;
`

export const VideoLikeLogo = styled(AiOutlineLike)`
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  width: 25px;
  height: 25px;
  margin-left: 16px;
  margin-right: 5px;
  @media screen and (max-width: 576px) {
    width: 15px;
    height: 15px;
  }
`
export const VideoDislikeLogo = styled(AiOutlineDislike)`
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
  width: 25px;
  height: 25px;
  margin-left: 16px;
  margin-right: 5px;
  @media screen and (max-width: 576px) {
    width: 15px;
    height: 15px;
  }
`
export const VideoSaveLogo = styled(CgPlayListAdd)`
  color: ${props => (props.saveColor ? '#2563eb' : '#64748b')};
  width: 25px;
  height: 25px;
  margin-left: 16px;
  margin-right: 5px;
  @media screen and (max-width: 576px) {
    width: 15px;
    height: 15px;
  }
`
export const VideoLikeText = styled.p`
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 88%;
  }
`
export const VideoDislikeText = styled.p`
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 88%;
  }
`
export const VideoSaveText = styled.p`
  color: ${props => (props.saveColor ? '#2563eb' : '#64748b')};
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 88%;
  }
`
export const Separator = styled.hr`
  border: 1px ${props => (props.lightTheme ? '#cbd5e1' : '#616e7c')} solid;
`
export const VideoChannelSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
`
export const VideoChannelProfileImage = styled.img`
  width: 50px;
  height: 50px;
  align-self: flex-start;
  margin-top: 10px;
  margin-right: 15px;
  @media screen and (max-width: 576px) {
    margin-top: 4px;
  }
`
export const VideoChannelTextSection = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoChannelName = styled.p`
  color: ${props => (props.lightTheme ? '#212121' : '#cccccc')};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
`

export const VideoChannelSubscribers = styled(VideoChannelName)`
  font-size: 14px;
  color: #64748b;
  margin-top: 0px;
`

export const VideoDescription = styled.p`
  color: ${props => (props.lightTheme ? '#475569' : '#cccccc')};
  font-size: 16px;
  font-weight: ${props => (props.lightTheme ? 500 : 400)};
  font-family: 'Roboto';
  margin-top: 25px;
  @media screen and (max-width: 576px) {
    margin-top: 5px;
    font-size: 88%;
  }
`
