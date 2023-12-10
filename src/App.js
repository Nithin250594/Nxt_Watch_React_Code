import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'

import LoginRoute from './components/LoginRoute'

import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import NotFoundRoute from './components/NotFoundRoute'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const MenuItemsList = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

// Replace your code here
class App extends Component {
  state = {
    lightTheme: true,
    savedVideosList: [],
    videoSaved: false,
    isMenuOpen: false,
    activeMenuItem: MenuItemsList.home,
  }

  onChangeTheme = () => {
    this.setState(prev => ({lightTheme: !prev.lightTheme}))
  }

  setActiveMenuItem = value => {
    this.setState({activeMenuItem: value})
  }

  handleToggle = () => {
    this.setState(prev => ({isMenuOpen: !prev.isMenuOpen}))
  }

  onSaveVideo = video => {
    this.setState(prev => {
      if (prev.savedVideosList.some(eachList => eachList.id === video.id)) {
        return {savedVideosList: [...prev.savedVideosList]}
      }
      return {savedVideosList: [...prev.savedVideosList, video]}
    })
  }

  onSaveVideo = video => {
    const {videoSaved} = this.state

    if (videoSaved === false) {
      this.setState(prev => {
        if (prev.savedVideosList.some(eachVideo => eachVideo.id === video.id)) {
          return {
            savedVideosList: [...prev.savedVideosList],
            videoSaved: !prev.videoSaved,
          }
        }
        return {
          savedVideosList: [...prev.savedVideosList, video],
          videoSaved: !prev.videoSaved,
        }
      })
    } else {
      this.setState(prev => ({
        savedVideosList: prev.savedVideosList.filter(
          eachVideo => eachVideo.id !== video.id,
        ),
        videoSaved: !prev.videoSaved,
      }))
    }
  }

  render() {
    const {
      lightTheme,
      savedVideosList,
      videoSaved,
      isMenuOpen,
      activeMenuItem,
    } = this.state

    return (
      <ThemeContext.Provider
        value={{
          lightTheme,
          onChangeTheme: this.onChangeTheme,
          savedVideosList,
          onSaveVideo: this.onSaveVideo,
          videoSaved,
          isMenuOpen,
          handleToggle: this.handleToggle,
          activeMenuItem,
          setActiveMenuItem: this.setActiveMenuItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <Route exact path="/bad-path" component={NotFoundRoute} />
          <Redirect to="bad-path" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
