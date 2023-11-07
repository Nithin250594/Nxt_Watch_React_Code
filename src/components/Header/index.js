import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import PopupLogout from '../PopupDesignFiles'

import ThemeContext from '../../context/ThemeContext'

import {
  NxtWatchHeader,
  WebsiteLogo,
  HeaderRightSection,
  HeaderLogos,
  ThemeButton,
  ThemeLogo1,
  ThemeLogo2,
  LogoutButton,
  StyledPopout,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme, onChangeTheme} = value
      const theme = lightTheme

      const {history} = props

      const websiteLogo = lightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NxtWatchHeader lightTheme={theme}>
          <Link to="/">
            <WebsiteLogo src={websiteLogo} alt="website logo" />
          </Link>

          <HeaderRightSection>
            <ThemeButton onClick={onChangeTheme} data-testid="theme">
              {lightTheme ? <ThemeLogo1 /> : <ThemeLogo2 />}
            </ThemeButton>

            <HeaderLogos
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <StyledPopout
              trigger={<LogoutButton lightTheme={theme}>Logout</LogoutButton>}
              modal
              closeOnDocumentClick
            >
              {close => (
                <PopupLogout
                  close={close}
                  onClickLogout={onClickLogout}
                  lightTheme={lightTheme}
                />
              )}
            </StyledPopout>
          </HeaderRightSection>
        </NxtWatchHeader>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
