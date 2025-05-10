import React from 'react'
import styled from 'styled-components'

import media from 'utils/media-queries'

const Div = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;  /* 🔧 Make “About” label tighter to the left */
  gap: 3rem;
  justify-content: start;
  width: 100%;
  ${media.md`
    grid-template-columns: auto;
    justify-content: center;
  `}
`

const LeftColumn = styled.div`
  padding-left: 0.5rem; /* Optional: small space from edge */
`

const RightColumn = styled.div`
  max-width: ${(props) => (props.wide ? '800px' : '680px')};
  
  margin-left: 1.5rem;  /* ✅ shifts text to the right */
  ${media.md`
    max-width: 90vw;
    margin-left: 0; /* reset on smaller screens */
  `}
`


const TwoColumns = (props) => {
  return (
    <Div>
      <LeftColumn>{props.leftColumn}</LeftColumn>
      <RightColumn wide={props.wide}>{props.rightColumn}</RightColumn>
    </Div>
  )
}

export default TwoColumns
