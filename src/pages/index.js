import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hallo</h1>
      <h2>I'm Miguel, a Front End web developer</h2>
      <p>Need a developer?</p>
      <Link to='/contact'>Contact</Link> 
    </Layout>
  )
}

export default IndexPage