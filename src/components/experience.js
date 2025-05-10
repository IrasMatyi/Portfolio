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
            <strong>Bioinformatics Intern</strong>,  
            Netherlands Cancer Institute (Jan–May 2025)
          </li>
          <li>
            <strong>Teaching Assistant</strong>,  
            Vrije Universiteit Amsterdam (Mar–May 2025)
          </li>
          <li>
            <strong>Data Analyst Intern</strong>,  
            Acme Health Tech (Summer 2024)
          </li>
        </ul>
      }
    />
  );
}
