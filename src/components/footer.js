import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          date,
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer} >
      <p>Created by {data.site.siteMetadata.author} in {data.site.siteMetadata.date} </p>
    </footer>
  )
}

export default Footer