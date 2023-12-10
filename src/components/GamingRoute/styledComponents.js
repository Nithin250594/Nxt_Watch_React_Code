import styled from 'styled-components'

import {SiYoutubegaming} from 'react-icons/si'

export const GamingDiv = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow-y: auto;
`

export const GamingLogo = styled(SiYoutubegaming)`
  color: #ff0000;
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
  @media screen and (max-width: 576px) {
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 0px;
  }
`
