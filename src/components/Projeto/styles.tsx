import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${props => props.theme.corDaBotarda};
  padding: 16px;
`

export const LinkBotao = styled.a`
  color:  ${props => props.theme.corDeFundo};
  font-size: 14px;
  background-color:  ${props => props.theme.corDoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 14px;
`
