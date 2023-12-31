import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginDiv,
  LoginForm,
  WebsiteLogo,
  LoginLabel,
  LoginInput,
  CheckBoxContainer,
  CheckBoxInput,
  CheckBoxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: 'NithinSai2505',
    password: 'rahul@2021',
    checkbox: false,
    errorMessage: '',
  }

  successfulLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 7})
    history.replace('/')
  }

  loginFailure = data => {
    this.setState({errorMessage: data.error_msg})
  }

  loginClicked = async event => {
    event.preventDefault()
    const {password} = this.state
    const username = 'rahul'
    const userDetails = {username, password}

    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
  try{
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const jwtToken = data.jwt_token
      this.successfulLogin(jwtToken)
    } else {
      this.loginFailure(data)
    }
  } catch(error){
      console.error("Login Error:" error)
       this.loginFailure(data)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({checkbox: !prevState.checkbox}))
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value

          const {username, password, checkbox, errorMessage} = this.state

          const passwordInfo = checkbox ? 'text' : 'password'

          const jwtToken = Cookies.get('jwt_token')

          const websiteUrl = lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          return (
            <LoginDiv lightTheme={lightTheme}>
              <LoginForm lightTheme={lightTheme}>
                <WebsiteLogo src={websiteUrl} alt="website logo" />
                <form onSubmit={this.loginClicked}>
                  <LoginLabel htmlFor="username" lightTheme={lightTheme}>
                    USERNAME
                  </LoginLabel>
                  <LoginInput
                    id="username"
                    placeholder="Username"
                    type="text"
                    onChange={this.onChangeUsername}
                    value={username}
                    lightTheme={lightTheme}
                  />
                  <LoginLabel htmlFor="password" lightTheme={lightTheme}>
                    PASSWORD
                  </LoginLabel>
                  <LoginInput
                    id="password"
                    placeholder="Password"
                    type={passwordInfo}
                    onChange={this.onChangePassword}
                    value={password}
                    lightTheme={lightTheme}
                  />
                  <CheckBoxContainer>
                    <CheckBoxInput
                      id="tick"
                      type="checkbox"
                      onChange={this.onChangeCheckbox}
                    />
                    <CheckBoxLabel htmlFor="tick" lightTheme={lightTheme}>
                      Show Password
                    </CheckBoxLabel>
                  </CheckBoxContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {errorMessage !== '' ? (
                    <ErrorMessage>*{errorMessage}</ErrorMessage>
                  ) : null}
                </form>
              </LoginForm>
            </LoginDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
