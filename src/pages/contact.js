import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nulla voluptatibus quia dolores obcaecati perspiciatis fugiat dolorum, soluta distinctio mollitia eius perferendis aperiam! Voluptatem distinctio maiores quibusdam consequatur molestias labore.
        </p>
        <Link to='http://www.Google.com'>Go to Google</Link>
      </Layout>      
  )
}

export default ContactPage