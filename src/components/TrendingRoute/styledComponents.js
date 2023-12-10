import styled from 'styled-components'

import {HiFire} from 'react-icons/hi'

export const TrendingDiv = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow-y: auto;
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
  @media screen and (max-width: 576px) {
    height: 15%;
  }
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
