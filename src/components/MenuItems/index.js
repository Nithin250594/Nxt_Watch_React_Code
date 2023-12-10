import ThemeContext from '../../context/ThemeContext'

import {
  NavItemUl,
  NavItemList,
  HomeLink,
  TrendingLink,
  GamingLink,
  SavedLink,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedIcon,
  HomeTitle,
  TrendingTitle,
  GamingTitle,
  SavedTitle,
  ContactUsSection,
  ContactUsTitle,
  SocialMediaLogos,
  SocialMediaLogo,
  ContactUsPara,
} from './styledComponents'

const MenuItemsList = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const MenuItems = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme, activeMenuItem, setActiveMenuItem} = value
      const theme = lightTheme

      return (
        <>
          <NavItemUl>
            <HomeLink
              to="/"
              lightTheme={theme}
              onClick={() => setActiveMenuItem(MenuItemsList.home)}
              isActive={activeMenuItem === MenuItemsList.home}
            >
              <NavItemList>
                <HomeIcon isActive={activeMenuItem === MenuItemsList.home} />
                <HomeTitle
                  lightTheme={theme}
                  isActive={activeMenuItem === MenuItemsList.home}
                >
                  Home
                </HomeTitle>
              </NavItemList>
            </HomeLink>
            <TrendingLink
              to="/trending"
              lightTheme={theme}
              onClick={() => setActiveMenuItem(MenuItemsList.trending)}
              isActive={activeMenuItem === MenuItemsList.trending}
            >
              <NavItemList>
                <TrendingIcon
                  isActive={activeMenuItem === MenuItemsList.trending}
                />
                <TrendingTitle
                  lightTheme={theme}
                  isActive={activeMenuItem === MenuItemsList.trending}
                >
                  Trending
                </TrendingTitle>
              </NavItemList>
            </TrendingLink>
            <GamingLink
              to="/gaming"
              lightTheme={theme}
              onClick={() => setActiveMenuItem(MenuItemsList.gaming)}
              isActive={activeMenuItem === MenuItemsList.gaming}
            >
              <NavItemList>
                <GamingIcon
                  isActive={activeMenuItem === MenuItemsList.gaming}
                />
                <GamingTitle
                  lightTheme={theme}
                  isActive={activeMenuItem === MenuItemsList.gaming}
                >
                  Gaming
                </GamingTitle>
              </NavItemList>
            </GamingLink>

            <SavedLink
              to="/saved-videos"
              lightTheme={theme}
              onClick={() => setActiveMenuItem(MenuItemsList.savedVideos)}
              isActive={activeMenuItem === MenuItemsList.savedVideos}
            >
              <NavItemList>
                <SavedIcon
                  isActive={activeMenuItem === MenuItemsList.savedVideos}
                />
                <SavedTitle
                  lightTheme={theme}
                  isActive={activeMenuItem === MenuItemsList.savedVideos}
                >
                  Saved videos
                </SavedTitle>
              </NavItemList>
            </SavedLink>
          </NavItemUl>
          <ContactUsSection>
            <ContactUsTitle lightTheme={theme}>CONTACT US</ContactUsTitle>
            <SocialMediaLogos>
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaLogos>
            <ContactUsPara lightTheme={theme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsPara>
          </ContactUsSection>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default MenuItems
