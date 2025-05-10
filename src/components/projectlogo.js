import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

const Image = styled.div`
  background: #eee;
  background-image: url(${props => props.$bg});
  background-size: cover;
  background-position: center center;
  flex: 0 0 100px;
  height: 100px;
  margin-right: 40px;
  border-radius: 8px;
`

const ProjectLogo = props => {
  return <Image $bg={props.children} />
}

export default ProjectLogo
