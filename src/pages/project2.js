// project2.js

import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import GlobalWrapper from 'components/global-wrapper'
import ArticleHeader from 'components/article/header'
import CoverImage from 'components/article/coverimage'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import TwoImage from 'components/article/twoimage'
import LargeImage from 'components/article/largeimage'

// Replace with your real image paths
import Error1 from 'img/articles/project2/errors.png'
import Error2 from 'img/articles/project2/errors2.png'
import CoverImg from 'img/articles/project2/4-dna.jpg'
import TestPerformance from 'img/articles/project2/comparison.png'

const Section = styled.section`
  margin: 34px 0;
  ${media.sm`
    margin: 0;
  `}
`

const Project2 = () => {
  return (
    <GlobalWrapper>
      <ArticleHeader title="Predicting Age from Methylation Profiles" />
      <div style={{ height: '96px' }} />
      <CoverImage src={CoverImg} focusX="50%" focusY="50%" />

      <Section>
        
       
        <ContentWrapper>
          <h2>Project Overview</h2>
          <p>
            In this project, we investigated whether machine learning models can predict an organism’s biological age based on DNA methylation patterns. We worked with a large dataset from the Mammalian Methylation Consortium, covering hundreds of species and thousands of conserved methylation markers.
          </p>
          <p>
            These methylation markers are concentrated at <strong>CpG sites</strong>, locations in the genome where a cytosine (C) is followed by a guanine (G), linked by a phosphate bond. These regions are critical because they are the primary targets of <strong>DNA methylation</strong>, a key epigenetic modification that regulates gene expression. Clusters of CpG sites, known as <strong>CpG islands</strong>, are often found near gene promoters. As organisms age, specific methylation changes accumulate at conserved CpG sites, making them reliable markers for estimating biological (rather than just chronological) age.
          </p>
          <p>
            Our goal was to evaluate different modeling approaches, including <strong>regularized linear models</strong>, <strong>decision trees</strong>, and <strong>deep learning</strong>, to build an accurate, cross-species epigenetic clock and uncover biologically meaningful patterns in aging.
          </p>
        </ContentWrapper>


        <ContentWrapper>
        <h2>Data Preprocessing & Feature Engineering</h2>
        <p>
          We began with <strong>12,282 mammalian samples</strong> from 159 species, each containing methylation β-values for <strong>37,554 conserved CpG sites</strong>. To enable meaningful cross-species comparison, we computed a normalized target variable called <strong>relative age</strong>, defined as:
        </p>
        <p style={{ textAlign: 'center' }}>
          <code>
            relative age = (chronological age + gestation period) / (maximum lifespan + gestation period)
          </code>
        </p>
        <p>
          This transformation ensured all age values fell between 0 and 1, avoiding negative values for pre-birth samples and accounting for species-specific lifespan differences.
        </p>
        <p>
          Methylation values were already normalized as β-values (between 0 and 1), but the feature matrix remained extremely high-dimensional and potentially collinear. We explored several strategies:
        </p>
        <ul>
          <li><strong>LASSO:</strong> To reduce dimensionality via L1 regularization while preserving interpretability.</li>
          <li><strong>ElasticNet:</strong> To balance sparsity (L1) and generalization (L2).</li>
          <li><strong>PLSR:</strong> Used as a linear dimensionality reduction technique when feature correlations were high, particularly beyond 50+ components.</li>
        </ul>
        <p>
          Feature preprocessing also included basic sanity checks (e.g., filtering missing values, avoiding division-by-zero errors during VIF calculation), and cross-validation was used to evaluate how preprocessing affected model generalizability.
        </p>
      </ContentWrapper>


        <TwoImage src1={Error1} src2={Error2} maxHeight="450px" />
        <ContentWrapper>
          <p>
            <em><strong>Figure Left: </strong></em> Comparison of cross-validation scores for different regression models, illustrating the trade-off between complexity and performance, with LASSO and PLSR50 showing optimal balance. <br />
            <em><strong>Figure Right: </strong></em> Enhancement in predictive performance with the application of elastic net regularization, evidenced by improved validation
scores across error metrics, showcasing the efficacy of combined L1 and L2 regularization.
          </p>
        </ContentWrapper>

        <ContentWrapper>
  <h2>Modeling & Evaluation</h2>
  <p>
    After tuning on cross‐validation, we trained our three finalist models—ElasticNet, LightGBM, and a fully‐connected neural network—on the full training set and evaluated them on the held‐out test set using three metrics:  
    <strong>RMSE</strong> (sensitivity to large errors), <strong>MAE</strong> (robustness to outliers), and <strong>Pearson’s r</strong> (overall correlation).
  </p>
  <ul>
    <li>
      <strong>ElasticNet:</strong> Achieved the lowest RMSE (~0.234) and MAE (~0.076) and the highest correlation (r≈0.937), thanks to its balanced L1/L2 penalty.
    </li>
    <li>
      <strong>LightGBM:</strong> Captured non‐linear patterns with RMSE≈0.27, MAE≈0.084, and r≈0.917, but showed slightly higher variance on extreme ages.
    </li>
    <li>
      <strong>Neural Network:</strong> Delivered intermediate performance (RMSE≈0.261, MAE≈0.1, r≈0.922), but required the most data and compute.
    </li>
  </ul>
  <p>
    Overall, ElasticNet’s simplicity and regularization gave it a clear edge—suggesting that, for conserved CpG markers, the methylation–age relationship is largely linear.
  </p>
</ContentWrapper>

{/* Final Test‐Set Comparison */}
<LargeImage src={TestPerformance}  />

<ContentWrapper style={{ textAlign: 'center', marginTop: '8px' }}>
  <em><strong>Figure:</strong></em> Performance comparison of elastic net, deep learning, and LGBM models on the test set, demonstrat- ing the superior prediction accuracy of the elastic net model across RMSE, MAE, and Pearson’s R, underscoring its robustness in age prediction from methylation profiles.
  
</ContentWrapper>
        
        <ContentWrapper>
          <h2>What I Learned</h2>
          <p>
            This project deepened my understanding of high-dimensional biological data, model selection, and the trade-off between interpretability and complexity. I learned to work with species-specific normalization, regularization techniques, and cross-model validation strategies. Importantly, I gained appreciation for how sparsity and biological variation impact model performance and why outliers in aging studies may reveal more than they disrupt.
          </p>
        </ContentWrapper>
      </Section>

      <Footer />
    </GlobalWrapper>
  )
}

export default Project2
