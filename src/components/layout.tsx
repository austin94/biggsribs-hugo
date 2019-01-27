import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import '../css/main.css'

const Layout: React.FC = ({ children }) => (
  <>
    <Helmet bodyAttributes={{ class: 'sans-serif' }} />
    <Header />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
