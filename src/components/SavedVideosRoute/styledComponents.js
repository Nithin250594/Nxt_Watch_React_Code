import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {CgPlayListAdd} from 'react-icons/cg'

export const SavedVideosDiv = styled.div`
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
  padding-left: 20px;
  padding-right: 20px;
`
export const TrendingLink = styled(HomeLink)`
  background-color: transparent;
`
export const GamingLink = styled(HomeLink)`
  background-color: transparent;
`
export const SavedLink = styled(HomeLink)`
  background-color: ${props => (props.lightTheme ? '#f1f5f9' : '#313131')};
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
  color: #ff0b37;
  margin-right: 25px;
`

export const HomeTitle = styled.p`
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
`
export const TrendingTitle = styled(HomeTitle)`
  font-weight: 400;
`
export const GamingTitle = styled(HomeTitle)`
  font-weight: 400;
`
export const SavedTitle = styled(HomeTitle)`
  font-weight: 600;
`

export const GamingLogo = styled(HiFire)`
  color: #ff0b37;
  width: 40px;
  height: 40px;
`
export const GamingVideosUl = styled.ul`
  list-style-type: none;
  padding-left: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-right: 20px;
`
export const NoSavedSection = styled.div`
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#000000')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`

export const NoSavedItemsImage = styled.img`
  width: 50%;
`
export const NoSavedItemsHeader = styled.h1`
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 600;
`
export const NoSavedItemsPara = styled.p`
  color: #7e858e;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
`
