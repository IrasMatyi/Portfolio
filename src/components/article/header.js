import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { color } from 'styles/theme'
import Icon from 'components/icons'

const TitleBar = styled.div`
  position: relative;
  margin: 2rem 0;
  padding-top: 2rem;
`

const BackArrow = styled(Link)`
  position: absolute;
  left: 10px;
  transform: rotate(90deg);
  max-width: 64px;
  max-height: 64px;
  color: ${color.grey900};
  ${media.sm`
    display: none;
  `};
  &:visited,
  &:hover,
  &:active {
    color: ${color.grey900};
  }
`

const Title = styled.div`
  width: 100%;
  text-align: center;
`

const ArticleHeader = ({ title }) => (
  <TitleBar>
    <BackArrow to="/#projects">
      <Icon glyph="arrow" size={64} />
    </BackArrow>
    <Title>
      <h1>{title}</h1>
    </Title>
  </TitleBar>
)

export default ArticleHeader
