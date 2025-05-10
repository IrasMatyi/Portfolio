import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import GlobalWrapper from 'components/global-wrapper'
import ArticleHeader from 'components/article/header'
import CoverImage from 'components/article/coverimage'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import TwoImage from 'components/article/twoimage'
//import LargeImage from 'components/article/largeimage'

// Import revised images: 
import CoverImg from 'img/articles/project1/smartphone.jpeg'
import CorrHeatmap from 'img/articles/project1/correlation_matrix.png'
import Trends from 'img/articles/project1/mood_circumplex_temporal_trends.png'
import ClassificationAcc from 'img/articles/project1/classification_acc.png'
import RNNPredPlot from 'img/articles/project1/time_series.png'
import SumClass from 'img/articles/project1/sum_class.png'


const Section = styled.section`
  margin: 34px 0;
  ${media.sm`
    margin: 0;
  `}
`


const Project1 = () => {
  return (
    <GlobalWrapper>
      {/* Project title */}
      <ArticleHeader title="Predicting Mood from Smartphone Data" />
      <div style={{ height: '96px' }} /> {/* Spacer to align below header */}

      {/* Cover image provides context about smartphone data */}
      <CoverImage src={CoverImg} focusX="50%" focusY="50%" />

      <Section>
        {/* Overview section */}
       <ContentWrapper>
    <h2>Project Overview</h2>
    <p>
      In this university project, we investigated whether behavioral data from smartphones could be used to predict a user’s next-day mood. The dataset consisted of <strong>376,912 time-stamped records</strong> from <strong>27 users</strong>, capturing app usage, physical activity, and self-reported mood scores over several months.
    </p>

    <p>
      Our goal was to identify short-term emotional patterns and build models capable of forecasting mood changes. We approached the task from both <strong>classification</strong> (mood up/down/stable) and <strong>regression</strong> (continuous mood score) perspectives, using <strong>tree-based models</strong> like Random Forest and XGBoost, as well as <strong>Recurrent Neural Networks (RNNs)</strong> for capturing temporal structure.
    </p>

    <p>
      The project provided hands-on experience with real-world, high-frequency behavioral data and contributed insights toward passive mental health monitoring through predictive modeling.
    </p>
  </ContentWrapper>

  <ContentWrapper>
    <h2>EDA & Data Preprocessing</h2>
    <p>
      We began with exploratory analysis to examine data distributions, user imbalance, and temporal trends. Missing values were addressed using <strong>user-level linear interpolation</strong>, and we removed a few implausible rows containing <strong>negative usage times</strong>.
    </p>
<p>
    Several attributes showed extreme usage values (e.g., 9+ hours/day for entertainment or builtin apps), but these were kept after verifying their plausibility based on context (e.g., streaming, browser sessions). No outliers were dropped as they likely reflected realistic user behavior.
  </p>

  <p>
    We aggregated the data <strong>per day</strong> to align behavioral predictors with daily mood reports. For mood, valence, and arousal, we computed <strong>mean, max, min, and standard deviation</strong>. Screen time, calls, and app usage were <strong>summed</strong>. A second dataset captured <strong>time-of-day trends</strong> by splitting each day into morning, afternoon, and evening bins.
  </p>

  <p>
    To enrich the features, we engineered <strong>lag-based predictors</strong> (e.g., previous day’s mood, change in wake time), <strong>composite features</strong> (e.g., sleep duration from inferred bed/wake times), and <strong>summary features</strong> (e.g., 7-day exponentially weighted moving averages). Linear interpolation was used to impute missing mood-related attributes while preserving temporal continuity.
  </p>
  </ContentWrapper>


        {/* Figure 1: Correlation Heatmap */}
        <TwoImage src1={Trends} src2={CorrHeatmap} maxHeight="450px"
        />

        <ContentWrapper>
          <p>
            <em><strong>Figure Left: </strong></em> Mood and circumplex trends by time of day, weekday, and month, showing consistent temporal structure across users.  <br />
            <em><strong>Figure Right: </strong></em> Feature correlation heatmap, highlighting variables most predictive of next-day mood.
          </p>
        </ContentWrapper>

        {/* Results summary */}
        <ContentWrapper>
          <h2>Modeling & Evaluation</h2>
          <p>
           We benchmarked a variety of algorithms: <strong>linear models, tree-based ensembles, and temporal architectures</strong>, on both classification and regression formulations of the mood-prediction task.
          </p>
          <p>
              <strong>Classification:</strong> Daily mood change was discretized into <em>three classes</em>—increase, decrease, or stable—using each user’s 
              ±0.7 × 7-day moving standard deviation as a personalized threshold.  
              Tree ensembles (Gradient Boosting, XGBoost) led the traditional models, while the RNN (leveraging yesterday’s state) achieved the highest test accuracy.
            </p>
            <p>
              <strong>Regression:</strong> We predicted the continuous mood score. Static models captured broad trends, but the RNN outperformed all—delivering an RMSE of ~0.52 and MAE of ~0.36—by directly modeling sequential dependencies.
            </p>
        </ContentWrapper>

        {/* Classification comparison + summary table, side by side */}
        
        <TwoImage
          src1={ClassificationAcc}
          src2={SumClass}
          maxHeight1="320px"
          maxHeight2="185px"
        />

        <ContentWrapper style={{ marginTop: '-10px', marginBottom: '-10px' }}>
          <p style={{ textAlign: 'center' }}>
            <em><strong>Figure Left: </strong></em> Test accuracy for multiclass classification across models.<br/>
            <em><strong>Figure Right: </strong></em> Detailed test/train accuracy, precision, recall, and F1.
          </p>
        </ContentWrapper>

        {/* Best regression model (RNN) */}
        <ContentWrapper style={{ marginTop: '0' }}>
          <img
            src={RNNPredPlot}
            alt="RNN Predicted vs Actual Mood"
            style={{ width: '127%', maxHeight: '15000px', marginTop: 0, marginLeft: '-10%' }}
          />
          <p style={{ marginTop: '0px' }}>
            <em><strong>Figure: </strong></em> RNN regression: predicted vs. actual mood over time, with each participant in a different color.
          </p>
        </ContentWrapper>

        <ContentWrapper>
          <h2>What I Learned</h2>
          <p>
            This project deepened my understanding of modeling time-dependent behavior using both traditional and temporal machine learning methods. I learned how to engineer personalized features, handle real-world behavioral data, and evaluate performance across classification and regression tasks. Most importantly, it reinforced the value of sequential models like RNNs when working with mood and behavior, which evolve over time and are influenced by short-term trends.
          </p>
        </ContentWrapper>

      </Section>

      {/* Footer for navigation/contact */}
      <Footer />
    </GlobalWrapper>
  )
}

export default Project1
