// src/components/article/twoimage.js
import React from 'react'
import styled from 'styled-components'

// Wrapper for two images side-by-side, typically used with a maxHeight prop
const TwoImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
`

// Individual image styled to respect a maxHeight prop
const Image = styled.img`
  max-height: ${props => props.maxHeight};
  align-self: center;
  max-width: 100%;
`

/**
 * TwoImage
 *
 * Props:
 *  - src1, src2: image URLs
 *  - alt1, alt2: alt text
 *  - maxHeight: default max-height for both images
 *  - maxHeight1: optional override for the first image
 *  - maxHeight2: optional override for the second image
 *  - className: forwarded for styled(TwoImage)
 */
const TwoImage = ({
  src1,
  alt1 = '',
  src2,
  alt2 = '',
  maxHeight = '400px',
  maxHeight1,
  maxHeight2,
  className,
}) => (
  <TwoImageWrapper className={className}>
    <Image src={src1} alt={alt1} maxHeight={maxHeight1 || maxHeight} />
    <Image src={src2} alt={alt2} maxHeight={maxHeight2 || maxHeight} />
  </TwoImageWrapper>
)

export default TwoImage