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
            University of Amsterdam (2023–2025)
          </li>
          <li>
            <strong>BSc Biomedical Engineering</strong>,  
            Budapest University of Technology (2019–2022)
          </li>
          <li>
            <strong>Machine Learning Certification</strong>,  
            Coursera (2024)
          </li>
        </ul>
      }
    />
  );
}
