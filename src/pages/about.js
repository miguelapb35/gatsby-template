import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis odit doloribus saepe culpa, id nisi harum odio doloremque voluptates quaerat quisquam. Minus, odio culpa? Odio debitis beatae ipsa facere.Voluptatum exercitationem architecto laboriosam quod corrupti et pariatur, debitis voluptatem, nobis esse nam eius, repudiandae ipsum labore neque fugiat quos quibusdam enim repellendus voluptate iure fuga eligendi. Beatae, nemo saepe.
        </p>
        <Link to='/contact'>Contact</Link>
      </Layout>      
  )
}

export default AboutPage