import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

export const NavItemUl = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const NavItemList = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const HomeLink = styled(Link)`
  text-decoration-line: none;
  background-color: ${props => {
    const lightThemeBackground = props.lightTheme ? '#f1f5f9' : 'transparent'
    const darkThemeBackground = props.lightTheme ? 'transparent' : '#313131'
    return props.isActive ? lightThemeBackground : darkThemeBackground
  }};
  border-width: 0px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`
export const TrendingLink = styled(HomeLink)`
  background-color: ${props => {
    const lightThemeBackground = props.lightTheme ? '#f1f5f9' : 'transparent'
    const darkThemeBackground = props.lightTheme ? 'transparent' : '#313131'
    return props.isActive ? lightThemeBackground : darkThemeBackground
  }};
`
export const GamingLink = styled(HomeLink)`
  background-color: ${props => {
    const lightThemeBackground = props.lightTheme ? '#f1f5f9' : 'transparent'
    const darkThemeBackground = props.lightTheme ? 'transparent' : '#313131'
    return props.isActive ? lightThemeBackground : darkThemeBackground
  }};
`
export const SavedLink = styled(HomeLink)`
  background-color: ${props => {
    const lightThemeBackground = props.lightTheme ? '#f1f5f9' : 'transparent'
    const darkThemeBackground = props.lightTheme ? 'transparent' : '#313131'
    return props.isActive ? lightThemeBackground : darkThemeBackground
  }};
`

export const HomeIcon = styled(AiFillHome)`
  width: 21px;
  height: 21px;
  color: ${props => (props.isActive ? '#ff0b37' : '#7e858e')};
  margin-right: 25px;
  @media screen and (max-width: 576px) {
    width: 15%;
    height: 15%;
  }
`
export const TrendingIcon = styled(HiFire)`
  width: 21px;
  height: 21px;
  color: ${props => (props.isActive ? '#ff0b37' : '#7e858e')};
  margin-right: 25px;
  @media screen and (max-width: 576px) {
    width: 15%;
    height: 21%;
  }
`
export const GamingIcon = styled(SiYoutubegaming)`
  width: 21px;
  height: 21px;
  color: ${props => (props.isActive ? '#ff0b37' : '#7e858e')};
  margin-right: 25px;
  @media screen and (max-width: 576px) {
    width: 15%;
    height: 15%;
  }
`
export const SavedIcon = styled(CgPlayListAdd)`
  width: 21px;
  height: 21px;
  color: ${props => (props.isActive ? '#ff0b37' : '#7e858e')};
  margin-right: 25px;
  @media screen and (max-width: 576px) {
    width: 15%;
    height: 15%;
  }
`

export const HomeTitle = styled.p`
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  font-size: 16px;
  font-weight: ${props => (props.isActive ? '600' : '400')};
  font-family: 'Roboto';
`
export const TrendingTitle = styled(HomeTitle)`
  font-weight: ${props => (props.isActive ? '600' : '400')};
`
export const GamingTitle = styled(HomeTitle)`
  font-weight: ${props => (props.isActive ? '600' : '400')};
`
export const SavedTitle = styled(HomeTitle)`
  font-weight: ${props => (props.isActive ? '600' : '400')};
`
export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  @media screen and (max-width: 576px) {
    margin-top: 180px;
  }
`
export const ContactUsTitle = styled.p`
  color: ${props => (props.lightTheme ? '#424242' : '#ffffff')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const SocialMediaLogos = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    width: 50%;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 80%;
  }
`
export const SocialMediaLogo = styled.img`
  width: 35px;
  height: 35px;
  @media screen and (max-width: 576px) {
    width: 25px;
    height: 25px;
  }
`
export const ContactUsPara = styled.p`
  width: 80%;
  color: ${props => (props.lightTheme ? '#424242' : '#ffffff')};
  font-size: 17px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.5;
  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 75%;
  }
`
