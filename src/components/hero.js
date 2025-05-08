import profimg from 'img/articles/profile/matyas_prof.jpg';
// src/components/hero.js
import React from 'react';
import styled from 'styled-components';
import Section from './section';
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import CvPdf from '../../static/Matyas_Iras_CV_DS.pdf';  // ✔ your PDF path




// ────────────────────────────────────────────────────────────────────────────────
// 1) Wrapper: grid with two columns (text | image), centered & responsive
// ────────────────────────────────────────────────────────────────────────────────
const HeroWrapper = styled.div`
  position: relative;
  margin: 4rem auto;
  max-width: 1000px;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 1fr auto; 
  align-items: center;
  column-gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

// ────────────────────────────────────────────────────────────────────────────────
// 2) Text Column: greeting, headline, sub-heading, and contacts
// ────────────────────────────────────────────────────────────────────────────────
const TextColumn = styled.div`
  .greeting {
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.25rem;
  }

  .yourName {
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 900;
    margin: 0;
    color: #d6336c;
  }

  .headline {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0.5rem 0;
    color: #111;
  }

  p {
    margin: 1rem 0 2rem;
    font-size: 1.2rem;
    color: #444;
  }
`;

const ContactIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
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
`;


// ────────────────────────────────────────────────────────────────────────────────
// 4) Profile Image: fixed width, nice shadow, responsive margin on mobile
// ────────────────────────────────────────────────────────────────────────────────
const ProfileImg = styled.img`
  width: 260px;
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 2rem auto 0;
  }
`;

// ────────────────────────────────────────────────────────────────────────────────
// 5) Component JSX
// ────────────────────────────────────────────────────────────────────────────────
const Hero = () => (
  <Section title="">
    <HeroWrapper>
      {/* Left side */}
      <TextColumn>
        <div className="greeting">Hi there, I’m</div>
        <h1 className="yourName">Mátyás Irás</h1>
        <h2 className="headline">
          Bridging bioinformatics with smart data science solutions.
        </h2>
        <p>Turning complex sequence data into meaningful cancer-immunotherapy insights.</p>

        <ContactIcons>
          <a href="mailto:your.email@gmail.com" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/IrasMatyi" target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={CvPdf} target="_blank" rel="noreferrer" title="Download CV">
            <FaFilePdf />
          </a>
        </ContactIcons>
      </TextColumn>

      {/* Right side: your photo */}
      <ProfileImg src={profimg} alt="Mátyás Irás" />
    </HeroWrapper>
  </Section>
);

export default Hero;
