// src/components/experience.js
import React from 'react';
import TwoColumns from 'components/twoColumns';
import SectionHeading from 'components/sectionHeading';



export default function Experience() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Experience</SectionHeading>}
      rightColumn={
        <ul>
          <li>
            <strong>Data Science Intern</strong>,  
            Netherlands Cancer Institute (Aug 2024 – July 2025)
          </li>
          <li>
            <strong>Teaching Assistant</strong>,  
            Vrije Universiteit Amsterdam (Mar – July 2025)
          </li>
          <li>
            <strong>Neuroscience Research and Data Analyst</strong>,  
            Institute of experimental medicine, Budapest (Sept. 2021 - Aug. 2023)
          </li>
        </ul>
      }
    />
  );
}
