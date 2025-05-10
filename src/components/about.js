// src/components/about.js
import React, { Fragment } from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'
import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

// Large, engaging intro text
const Big = styled.span`
  display: block;
  font-size: ${fontSize.f5};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.4;
  margin-bottom: 1rem;
  ${media.lg`
    font-size: ${fontSize.f4};
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

// Highlight key phrases
const Highlight = styled.span`
  color: ${color.primary};
  font-weight: 600;
`

// Button for CV download
const CVButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background: ${color.primary};
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    opacity: 0.9;
  }
`

const About = () => (
  <TwoColumns
    leftColumn={<SectionHeading>About</SectionHeading>}
    rightColumn={
      <Fragment>
        <Big>
          Data is everywhere. I turn it into something useful!
        </Big>
        <p>
          These days, whether you work in healthcare, tech, marketing, or finance, 
          we’re all surrounded by an overwhelming amount of data. But having the data is just the beginning; the real challenge 
          is transforming it into insights that drive decisions. 
          That’s the beauty of data science, a messy spreadsheet or a string of measurements might seem meaningless on its own, but with the right approach (and a bit of curiosity),
          it can spark breakthroughs in drug development, shape smarter marketing decisions, or detect subtle financial shifts before anyone else.
        </p>
        <p>
          Over the past few years, I’ve applied data science in diverse settings—from neuroscience and cancer 
          research to mood prediction, recommendation systems, and epigenetic analysis. I’ve built pipelines 
          and models that turn complex data into clear insight. Working in research taught me to be 
          comfortable thinking independently while also being fully immersed in collaborative teamwork—switching 
          between deep focus and open discussion as the project demands. I’m not just used to working with people 
          from different backgrounds; I’m a strong believer in it. In my experience, interdisciplinary teams—where 
          people bring different perspectives, experiences, and ways of thinking—often lead to the most creative and impactful solutions.
        </p>
        <p>
          While I love working in biology-related fields, I’m now eager to take on new challenges, whether that’s in tech, business, software, or consulting. I’m equally curious about how companies make decisions, how tools are built, and how innovation happens outside the lab.
          I see data science as a flexible and powerful craft, and I’m excited to apply it in new contexts, work across disciplines, and keep learning as I go.
        </p>
        <CVButton href="/Matyas_Iras_CV_DS.pdf" target="_blank" rel="noreferrer">
          Download my CV
        </CVButton>
      </Fragment>
    }
  />
)

export default About
