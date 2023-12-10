import styled from 'styled-components'

export const LoginDiv = styled.div`
  background-color: ${props => (props.lightTheme ? '#f1f1f1' : '#212121')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#000000')};
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (max-width: 576px) {
    width: 77%;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 769px) {
    width: 45%;
    max-width: 450px;
  }
`

export const WebsiteLogo = styled.img`
  width: 50%;
  align-self: center;
  margin-bottom: 50px;
`
export const LoginLabel = styled.label`
  color: ${props => (props.lightTheme ? '#7e858e' : '#cccccc')};
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const LoginInput = styled.input`
  border: 1px ${props => (props.lightTheme ? '#cbd5e1' : '#616e7c')} solid;
  background-color: ${props => (props.lightTheme ? null : 'transparent')};
  width: 100%;
  padding-left: 15px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 5px;
  margin-bottom: 18px;
  border-radius: 5px;
  outline: none;
  color: ${props => (props.lightTheme ? null : '#ffffff')};
`
export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const CheckBoxInput = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`
export const CheckBoxLabel = styled(LoginLabel)`
  color: ${props => (props.lightTheme ? '#383838' : '#cccccc')};
  font-size: 16px;
  font-weight: ${props => (props.lightTheme ? '500' : '400')};
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border-width: 0px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  padding-top: 12px;
  padding-bottom: 12px;
  width: 100%;
  margin-top: 30px;
  cursor: pointer;
  outline: none;
`
export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
`
