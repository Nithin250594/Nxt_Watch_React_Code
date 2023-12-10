import styled from 'styled-components'

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
  @media screen and (max-width: 576px) {
    padding-right: 10px;
  }
`
export const HomeLeftSection = styled.div`
  width: 18vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 35px;
  @media screen and (max-width: 576px) {
    display: none;
    width: 0px;
  }

  @media screen and (min-width: 577px) and (max-width: 992px) {
    width: 30vw;
  }
`
export const HomeRightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 82vw;
  height: 100vh;
  margin-top: 0px;
  overflow-y: auto;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 70vw;
  }
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
  padding-left: 25px;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-right: 25px;
  @media screen and (max-width: 576px) {
    height: 35%;
    max-height: 29vh;
  }
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
  @media screen and (max-width: 576px) {
    width: 24%;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 35%;
  }
`

export const BannerText = styled.p`
  color: #475569;
  font-size: 24px;
  width: 38%;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.6;
  @media screen and (max-width: 576px) {
    width: 65%;
    font-size: 18px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 75%;
    font-size: 18px;
  }
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
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const NxtWatchSection = styled.div`
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#000000')};
  width: 100%;
  padding: 20px;
  margin-top: 10px;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
  @media screen and (max-width: 576px) {
    width: 85%;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 85%;
  }
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
  justify-content: space-between;
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
