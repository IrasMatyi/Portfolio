// src/components/education.js
import React from 'react';
import TwoColumns from 'components/twoColumns';
import SectionHeading from 'components/sectionHeading';

export default function Education() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Education</SectionHeading>}
      rightColumn={
        <ul>
          <li>
            <strong>MSc Bioinformatics & Systems Biology</strong>,  
            University of Amsterdam (Sept. 2023 – July 2025)
          </li>
          <li>
            <strong>BSc Biomedical Engineering</strong>,  
            Pazmany Peter Catholic University(Sept. 2019 – Feb. 2023)
          </li>
         
        </ul>
      }
    />
  );
}
