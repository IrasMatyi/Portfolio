import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import Project1Logo from 'img/articles/project1/phone-icon.png'
import Project2Logo from 'img/articles/project2/dna-icon.png'
import Project3Logo from 'img/articles/project3/hotel-icon.png'

const Project1Link = <Link to="/project1">Read More</Link>
const Project2Link = <Link to="/project2">Read More</Link>
const Project3Link = <Link to="/project3">Read More</Link>

const Projects = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Projects</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={Project1Logo}
            title="Mood Prediction from Smartphone Data"
            abstract="Built classical ML and RNN models to predict next-day mood using passive smartphone signals, app usage, and mood trends."
            link={Project1Link}
          />
          <Project
            logo={Project2Logo}
            title="Predicting Age from Methylation Profiles"
            abstract="Built a cross-species epigenetic clock with ElasticNet, LightGBM, and neural networks on 12K+ conserved CpG methylation markers to reveal linear age–methylation relationships."
            link={Project2Link}
          />
          <Project
            logo={Project3Logo}
            title="Hotel Booking Recommender"
            abstract="Built a hotel recommender on 4.7 M Expedia searches using LightGBM’s LambdaMART, engineered ranking & booking features, and achieved NDCG@5 of 0.356."
            link={Project3Link}
          />
        </Fragment>
      }
    />
  )
}

export default Projects
