import React, { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import GlobalStyle from 'styles/global-style'
import Header from 'components/header';


const GlobalWrapper = (props) => {
  const [displayOutlines, setDisplayOutlines] = useState(false)

  const handleKeyboardInput = (e) => {
    const key = e.keyCode || e.charCode
    // Tab
    if (key === 9) {
      setDisplayOutlines(true)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyboardInput(e))
  })

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>Matyas Iras</title>
        <meta name="description" content="Matyas Iras’s end-to-end data science & ML projects" />
        <meta
          name="keywords"
          content="data science, machine learning, bioinformatics, React, Gatsby, portfolio"
        />
        <meta
          property="og:image"
          content="https://via.placeholder.com/250"
        />
        <meta property="og:description" content="Matyas Iras's projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://matyas-iras.netlify.app" />
        <meta property="og:title" content="Matyas Iras" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/MI-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/MI-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/MI-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <GlobalStyle displayOutlines={displayOutlines} />
      <Header />
      {props.children}
    </Fragment>
  )
}

export default GlobalWrapper
