import {FaMoon} from 'react-icons/fa'

import {FiSun} from 'react-icons/fi'

import Popout from 'reactjs-popup'

import styled from 'styled-components'

export const NxtWatchHeader = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#181818')};
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  outline: none;
`

export const WebsiteLogo = styled.img`
  width: 8vw;
`

export const HeaderRightSection = styled.div`
  width: 14vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogos = styled.img`
  width: 35x;
  height: 35px;
`

export const ThemeLogo1 = styled(FaMoon)`
  width: 25px;
  height: 25px;
`
export const ThemeLogo2 = styled(FiSun)`
  width: 25px;
  height: 25px;
  color: #ffffff;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: ${props => (props.lightTheme ? '2px' : '1px')}
    ${props => (props.lightTheme ? '#3b82f6' : '#ffffff')} solid;
  color: ${props => (props.lightTheme ? '#3b82f6' : '#ffffff')};
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 6px;
  padding-bottom: 6px;
  cursor: pointer;
  outline: none;
`
export const StyledPopout = styled(Popout)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
`
