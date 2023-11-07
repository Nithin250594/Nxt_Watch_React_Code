import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {HiFire} from 'react-icons/hi'

import {AiFillHome} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

export const TrendingDiv = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow-y: auto;
`

export const HomeLink = styled(Link)`
  background-color: transparent;
  text-decoration-line: none;
  border-width: 0px;
  width: 18vw;
  padding-left: 30px;
`
export const TrendingLink = styled(HomeLink)`
  background-color: ${props => (props.lightTheme ? '#f1f5f9' : '#313131')};
`
export const GamingLink = styled(HomeLink)`
  background-color: transparent;
`
export const SavedLink = styled(HomeLink)`
  background-color: transparent;
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
  color: #ff0b37;
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

export const HomeTitle = styled.p`
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
`
export const TrendingTitle = styled(HomeTitle)`
  font-weight: 600;
`
export const GamingTitle = styled(HomeTitle)`
  font-weight: 400;
`
export const SavedTitle = styled(HomeTitle)`
  font-weight: 400;
`

export const TrendingBannerSection = styled.div`
  background-color: ${props => (props.lightTheme ? '#ebebeb' : '#181818')};
  height: 30vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 70px;
  padding-top: 40px;
  padding-bottom: 40px;
`
export const NxtWatchSection = styled.div`
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#000000')};
  width: 100%;
  padding: 30px;
`

export const TrendingLogoBox = styled.div`
  background-color: ${props => (props.lightTheme ? '#d7dfe9' : '#000000')};
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const TrendingLogo = styled(HiFire)`
  color: #ff0000;
  width: 40px;
  height: 40px;
`
export const TrendingText = styled.h1`
  color: ${props => (props.lightTheme ? '#231f20' : '#ffffff')};
  font-size: 32px;
  font-weight: 800;
  font-family: 'Roboto';
`
export const TrendingVideosUl = styled.ul`
  display: flex;
  flex-direction:column
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 0px;
  list-style-type: none;
  flex-wrap: wrap;
  margin-top: 35px;
`
