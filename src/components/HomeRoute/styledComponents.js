import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

import {IoIosSearch} from 'react-icons/io'

import {MdClose} from 'react-icons/md'

export const HomeDiv = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#181818')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow-y: auto;
`
export const HomeSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 30px;
  margin-top: 20px;
`
export const HomeLeftSection = styled.div`
  width: 18vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 35px;
`
export const HomeRightSection = styled(HomeLeftSection)`
  justify-content: flex-start;
  width: 82vw;
  height: 100vh;
  margin-top: 0px;
  overflow-y: auto;
`
export const NavItemUl = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`

export const NavItemList = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const HomeLink = styled(Link)`
  text-decoration-line: none;
  background-color: ${props => (props.lightTheme ? '#f1f5f9' : '#313131')};
  border-width: 0px;
  width: 18vw;
  padding-left: 30px;
`
export const TrendingLink = styled(HomeLink)`
  background-color: transparent;
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
  color: #ff0b37;
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

export const HomeTitle = styled.p`
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
`
export const TrendingTitle = styled(HomeTitle)`
  font-weight: 400;
`
export const GamingTitle = styled(HomeTitle)`
  font-weight: 400;
`
export const SavedTitle = styled(HomeTitle)`
  font-weight: 400;
`
export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`
export const ContactUsTitle = styled.p`
  color: ${props => (props.lightTheme ? '#424242' : '#ffffff')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const SocialMediaLogos = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const SocialMediaLogo = styled.img`
  width: 35px;
  height: 35px;
`
export const ContactUsPara = styled.p`
  width: 80%;
  color: ${props => (props.lightTheme ? '#424242' : '#ffffff')};
  font-size: 17px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.5;
`

export const HomeBannerSection = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-right: 20px;
`
export const BannerTopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const BannerSectionClose = styled(MdClose)`
  height: 20px;
  width: 20px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border-width: 0px;
`

export const BannerWebsiteLogo = styled.img`
  width: 12%;
`

export const BannerText = styled.p`
  color: #475569;
  font-size: 24px;
  width: 38%;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.6;
`
export const GetItNowButton = styled.button`
  background-color: transparent;
  border: 2px #475569 solid;
  color: #424242;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const NxtWatchSection = styled.div`
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#000000')};
  width: 100%;
  padding: 30px;
  margin-top: 10px;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 40%;
`

export const SearchInput = styled.input`
  background-color: ${props => (props.lightTheme ? '#ffffff' : 'transparent')};
  padding-left: 15px;
  padding-right: 30px;
  height: 35px;
  border: 1px ${props => (props.lightTheme ? '#cbd5e1' : '#424242')} solid;
  width: 100%;
  outline: none;
  ::placeholder {
    font-weight: 500;
    color: #7e858e;
    font-size: 14px;
  }
`
export const SearchLogoBox = styled.button`
  height: 35px;
  width: 70px;
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#231f20')};
  border: 1px ${props => (props.lightTheme ? '#cbd5e1' : '#424242')} solid;
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`
export const SearchLogo = styled(IoIosSearch)`
  width: 18px;
  height: 18px;
  color: #616e7c;
`
export const VideosUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 0px;
  list-style-type: none;
  flex-wrap: wrap;
  margin-top: 35px;
`

export const LoaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FailureSection = styled.div`
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#000000')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`

export const FailureImage = styled.img`
  width: 50%;
`
export const FailureHeader = styled.h1`
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 600;
`
export const FailurePara = styled.p`
  color: #7e858e;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  text-align: center;
  line-height: 1.5;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  width: 90px;
  height: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 14px;
  padding-right: 14px;
  color: #ffffff;
  border-width: 0px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
`
