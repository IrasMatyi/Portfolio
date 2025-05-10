// src/components/hero.js
import React from 'react'
import styled from 'styled-components'
import profimg from 'img/articles/profile/matyas_prof.jpg'
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'
import CvPdf from '../../static/Matyas_Iras_CV_DS.pdf'

// ────────────────────────────────────────────────────────────────────────────────
// 1) Wrapper: grid with two columns (text | image), centered & responsive
// ────────────────────────────────────────────────────────────────────────────────
const HeroWrapper = styled.div`
  margin: 4rem auto;
  max-width: 1000px;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  column-gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

// ────────────────────────────────────────────────────────────────────────────────
// 2) Text Column & Typographic Pieces
// ────────────────────────────────────────────────────────────────────────────────
const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const Greeting = styled.h2`
  font-size: 3.3rem;
  font-weight: 800;
  margin: 0;
  color: #111;
`

const NameLine = styled.h1`
  font-size: 3.3rem;
  font-weight: 800;
  margin: 0.25rem 0 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;

  span.intro {
    color: #111;
    margin-right: 0.5rem;
  }
  span.highlight {
    color: #d6336c;
  }
`

const Tagline = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem;
  color: #222;

  span {
    cursor: pointer;
    font-weight: 600;
  }
  span.bio:hover {
    color: #0070f3;
    border-color: #0070f3;
  }
  span.ds:hover {
    color: #28a745;
    border-color: #28a745;
  }
`

const Subtext = styled.p`
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 2rem;
`

// ────────────────────────────────────────────────────────────────────────────────
// 3) Contact Icons & Profile Image
// ────────────────────────────────────────────────────────────────────────────────
const ContactIcons = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  a {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    background: #f4f4f4;
    border-radius: 50%;
    color: #333;
    transition: background 0.2s, color 0.2s, transform 0.2s;

    &:hover {
      background: #d6336c;
      color: white;
      transform: translateY(-2px);
    }
  }
`

const ProfileImg = styled.img`
  width: 300px;
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 2rem auto 0;
  }
`

// ────────────────────────────────────────────────────────────────────────────────
// Optional CTA for quick navigation
// ────────────────────────────────────────────────────────────────────────────────
const CTA = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const PrimaryButton = styled.button`
  background: #d6336c;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background: #b02858;
  }
`

// ────────────────────────────────────────────────────────────────────────────────
// 4) Component JSX
// ────────────────────────────────────────────────────────────────────────────────
export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HeroWrapper id="home">
      <TextColumn>
        <Greeting>Hi There,</Greeting>

        <NameLine>
          <span className="intro">I'm</span>
          <span className="highlight">Matyas Iras</span>
        </NameLine>

        <Tagline>
          <span className="ds">Data Scientist</span> solving real-world problems with a background in{' '}
          <span className="bio">Bioinformatics</span>.
        </Tagline>

        <Subtext>
          Turning large-scale data into actionable insights—whether that’s customer behavior or cancer-immunotherapy.
        </Subtext>

        <ContactIcons>
          <a href="mailto:iras.matyi@gmail.com" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/IrasMatyi" target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/matyas-iras-759b0524b" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={CvPdf} target="_blank" rel="noreferrer" title="Download CV">
            <FaFilePdf />
          </a>
        </ContactIcons>

        <CTA>
          <PrimaryButton onClick={scrollToProjects}>View My Projects</PrimaryButton>
        </CTA>
      </TextColumn>

      <ProfileImg src={profimg} alt="Mátyás Irás" />
    </HeroWrapper>
  )
}
