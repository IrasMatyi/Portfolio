import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import GlobalWrapper from 'components/global-wrapper'
import ArticleHeader from 'components/article/header'
import CoverImage from 'components/article/coverimage'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import TwoImage from 'components/article/twoimage'

// Import images for Project 3
import CoverImg from 'img/articles/project3/hotel1.webp'
import TargetDistribution from 'img/articles/project3/target_distr.png'
import CorrPlot from 'img/articles/project3/corr_plot.png'
//import FeatureImportance from 'img/articles/project3/figure4_feature_importance.png'
import NDCGProgress from 'img/articles/project3/ndcg.png'


const Section = styled.section`
  margin: 34px 0;
  ${media.sm`
    margin: 0;
  `}
`

const Project3 = () => {
  return (
    <GlobalWrapper>
      {/* Project title */}
      <ArticleHeader title="Recommender System for Hotel Bookings" />
      <div style={{ height: '96px' }} />

      {/* Cover image sets the context: personalization at scale */}
      <CoverImage src={CoverImg} focusX="50%" focusY="50%" />

      <Section>
        {/* Introduction and Motivation */}
        <ContentWrapper>
          <h2>Introduction &amp; Motivation</h2>
          <p>
            As part of a university Data Mining course we joined a kaggle competition. Our team tackled the challenge of building a large-scale hotel recommender using Expedia’s search logs. In an industry where personalized rankings can drive higher engagement and bookings, our goal was to rank hotels by relevance, optimizing for both clicks and confirmed reservations via the NDCG@5 metric. Handling over <strong>4.7 million search interactions</strong> across <strong>129,000 properties</strong> provided valuable experience in scalable data processing, ranking-specific feature creation, and advanced gradient-boosting deployment.
          </p>
        </ContentWrapper>

        {/* Combined EDA, Preprocessing & Feature Engineering */}
        <ContentWrapper>
          <h2>EDA, Preprocessing &amp; Feature Engineering</h2>
          <p>
            Our exploratory analysis began by examining target distributions and data quality across the full dataset. Summary statistics for numeric fields (e.g., price, distance, popularity) exposed extreme values beyond the 1st and 99th percentiles, which we clipped to preserve valid outliers such as ultra-luxury hotels. We assessed missingness, dropping features with &gt;50% nulls and imputing remaining gaps using median for skewed numerics and mode for categoricals. Pairwise Pearson correlation analysis helped detect multicollinearity, guiding us to remove redundant variables. For feature engineering, we aggregated metrics at the <em>search</em> and <em>property</em> level—average price rank within each search, historical click-through and booking rates—and constructed ratio/lag features like value-for-money scores and days-since-last-booking. Rolling user-level statistics (e.g., past 7-day booking frequency) enriched the model with temporal behavior patterns.
          </p>
        </ContentWrapper>

        {/* Figures 1 & 2 side-by-side */}
        <TwoImage src1={TargetDistribution} src2={CorrPlot} maxHeight="500px" />
        <ContentWrapper>
          <p style={{ textAlign: 'center' }}>
            <em><strong>Figure Left:</strong></em> Distribution of <em>click_bool</em> and <em>booking_bool</em> per search-property instance. <br />
            <em><strong>Figure Rigth:</strong></em> Pearson correlation heatmap of numeric features, highlighting multicollinearity.
          </p>
        </ContentWrapper>

        {/* Modeling & Evaluation Section */}
        <ContentWrapper>
          
          <h2>Modeling &amp; Evaluation</h2>
          <p>
            To rigorously evaluate ranking performance, we split the dataset by search sessions into 70% training, 15% validation, and 15% test sets, ensuring no user overlap between splits. We used NDCG@5 as our primary metric, supplemented by Mean Reciprocal Rank (MRR) and click-through rate (CTR) to capture ranking quality and user engagement. Hyperparameter tuning employed 5-fold cross-validation on the training set, with grid searches for learning rate, tree depth, and regularization terms. Early stopping on the validation NDCG prevented overfitting and reduced training time by ~30%.
          </p>
          <ul>
            <li>
              <strong>Logistic Regression (Pointwise):</strong> We trained using SGD with L2 regularization, treating clicks and bookings as weighted labels (booking weight = 5× click). The model converged in <em>~10 epochs</em>, achieving <em>NDCG@5 = 0.27</em> and MRR = 0.19. While fast to train, it lacked interaction modeling capacity.
            </li>
            <li>
              <strong>Random Forest (Pairwise Approximation):</strong> Leveraging pairwise differences to approximate ranking objectives, we trained 500 trees with max depth 10. Feature subsampling (√p) reduced variance, yet the model plateaued at <em>NDCG@5 = 0.20</em> due to sensitivity to click-heavy noise and longer training times (~4 hours).
            </li>
            <li>
              <strong>LightGBM (LambdaMART, Listwise):</strong> This listwise approach directly optimizes NDCG, making it well-suited for our objective. We tuned the number of leaves (31–127), learning rate (0.01–0.1), and regularization (λ = 0.1–1.0), settling on 100 leaves, 0.05 learning rate, and λ = 0.5. Early stopping after 50 rounds yielded <em>NDCG@5 = 0.356</em>, MRR = 0.248, and CTR uplift of +8% over baseline.
            </li>
          </ul>
          <img
            src={NDCGProgress}
            alt="NDCG Progression"
            style={{ display: 'block', margin: '16px auto', maxHeight: '450px', width: 'auto' }}
          />
          <ContentWrapper>
            <p style={{ textAlign: 'center' }}>
              <em><strong>Figure:</strong></em> Iterative NDCG@5 improvements across modeling stages.
            </p>
          </ContentWrapper>
        </ContentWrapper>

        

        {/* Learnings Section */}
        <ContentWrapper>
          <h2>What I Learned</h2>
          <p>
            This project sharpened my skills in large-scale data wrangling, ranking-specific feature construction, and hyperparameter tuning for listwise learning-to-rank. Deploying the model in a distributed environment also provided hands-on experience with production-grade ML pipelines.  It also highlighted the importance of balancing model complexity with inference latency to meet real-time service requirements.
          </p>
        </ContentWrapper>
      </Section>

      {/* Footer for navigation/contact */}
      <Footer />
    </GlobalWrapper>
  )
}

export default Project3
