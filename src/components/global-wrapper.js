// src/components/global-wrapper.js
import React, { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import GlobalStyle from 'styles/global-style'
import Header from 'components/header'

const GlobalWrapper = ({ children }) => {
  const [displayOutlines, setDisplayOutlines] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.keyCode || e.charCode) === 9) {
        setDisplayOutlines(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />

        {/* Page title & meta */}
        <title>Matyas Iras • Data Science Portfolio</title>
        <meta
          name="description"
          content="End-to-end data science & machine learning projects by Matyas Iras"
        />
        <meta
          name="keywords"
          content="data science, machine learning, bioinformatics, React, Gatsby, portfolio"
        />

        {/* Open-Graph for social previews */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://matyas-iras.netlify.app" />
        <meta property="og:title"       content="Matyas Iras • Data Science Portfolio" />
        <meta
          property="og:description"
          content="Explore my projects in data science, ML and bioinformatics"
        />
        <meta
          property="og:image"
          content="https://matyas-iras.netlify.app/og-image.png"
        />

        {/* Favicon (your MI icon must live at static/favicon.ico)j */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <GlobalStyle displayOutlines={displayOutlines} />
      <Header />
      {children}
    </Fragment>
  )
}

export default GlobalWrapper
