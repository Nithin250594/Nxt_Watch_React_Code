import {Link} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'

import {FiSun, FiLogOut} from 'react-icons/fi'

import Popout from 'reactjs-popup'

import styled from 'styled-components'

import {IoMenu, IoClose} from 'react-icons/io5'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

export const NxtWatchHeader = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : 'transparent')};
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  @media screen and (max-width: 576px) {
    padding-left: 15px;
    width: 100%;
    height: 15%;
  }
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  outline: none;
`

export const WebsiteLogo = styled.img`
  width: 8vw;
  @media screen and (max-width: 576px) {
    width: 40%;
  }
  @media screen and (min-width: 577px) {
    width: 40%;
  }
`

export const HeaderRightSection = styled.div`
  width: 22%;
  max-width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 576px) {
    margin-right: 14px;
    width: 25%;
  }

  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 45%;
    max-width: 200px;
    margin-right: 18px;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 50%;
    max-width: 200px;
    margin-right: 18px;
  }
`

export const LogoutIcon = styled(FiLogOut)`
  width: 30px;
  height: 30px;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#181818')};
  color: ${props => (props.lightTheme ? '#181818' : '#f9f9f9')};
`

export const IconsToggleButton = styled(IoMenu)`
  width: 30px;
  height: 30px;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#181818')};
  color: ${props => (props.lightTheme ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 577px) {
    display: none;
  }
`

export const HeaderLogos = styled.img`
  width: 35x;
  height: 35px;
  @media screen and (max-width: 576px) {
    display: none;
  }
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
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const LogoutButtonIcon = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 577px) {
    display: none;
  }
`
export const StyledPopout = styled(Popout)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const NavContainer = styled.nav`
  color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 577px) {
    display: none;
  }
`

export const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:hover {
    background-color: #444;
  }
`

export const HamburgerIcon = styled.button`
  display: none;
  @media (max-width: 576px) {
    display: block;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 576px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 0px;
    right: 0px;
    width: 220px;
    height: 100vh;
    background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#181818')};
    padding: 25px 0px 0px 10px;
    transition: 0.5s ease-in-out;
  }
`
export const CloseIconButton = styled.button`
  display: none;
  @media (max-width: 576px) {
    display: inline;
    background-color: transparent;
    border-width: 0px;
    cursor: pointer;
    outline: none;
    align-self: flex-end;
    margin-right: 20px;
    margin-bottom: 15px;
  }
`

export const CloseIcon = styled(IoClose)`
  display: none;

  @media (max-width: 576px) {
    display: inline;
    width: 25px;
    height: 25px;
    color: ${props => (props.lightTheme ? '#181818' : '#f9f9f9')};
  }
`

export const NavItemLink = styled(Link)`
  text-decoration-line: none;
  background-color: ${props => (props.lightTheme ? '#f1f5f9' : '#313131')};
  border-width: 0px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`

export const HomeIcon = styled(AiFillHome)`
  width: 21px;
  height: 21px;
  color: ${props => (props.status ? '#ff0b37' : '#7e858e')};
  margin-right: 25px;
  @media screen and (max-width: 576px) {
    width: 21%;
    height: 21%;
  }
`
export const TrendingIcon = styled(HiFire)`
  width: 21px;
  height: 21px;
  color: #7e858e;
  margin-right: 25px;
  @media screen and (max-width: 576px) {
    width: 21%;
    height: 21%;
  }
`
export const GamingIcon = styled(SiYoutubegaming)`
  width: 21px;
  height: 21px;
  color: #7e858e;
  margin-right: 25px;
  @media screen and (max-width: 576px) {
    width: 21%;
    height: 21%;
  }
`
export const SavedIcon = styled(CgPlayListAdd)`
  width: 21px;
  height: 21px;
  color: #7e858e;
  margin-right: 25px;
  @media screen and (max-width: 576px) {
    width: 21%;
    height: 21%;
  }
`
