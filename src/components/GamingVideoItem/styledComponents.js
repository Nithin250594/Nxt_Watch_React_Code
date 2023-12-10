import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const EachGamingLink = styled(Link)`
  text-decoration-line: none;
`

export const GamingVideoListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 32%;
  margin-bottom: 50px;
`
export const GamingVideoImageUrl = styled.img`
  width: 95%;
`
export const GamingVideoTextSection = styled.div`
  width: 80%;
  margin-left: 20px;
  align-self: flex-start;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 0px;
  }
`
export const GamingVideoTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.lightTheme ? '#313131' : '#ffffff')};
  font-family: 'Roboto';
  line-height: 1.5;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 88%;
  }
`

export const GameVideoViewsText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #64748b;
  font-family: 'Roboto';
  margin-top: 3px;
  @media screen and (max-width: 576px) {
    font-size: 68%;
  }
`
