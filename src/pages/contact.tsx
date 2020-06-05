import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/jumbotron'
import GoogleMap from '../components/google-map'
import BbbOutdoor from '../images/bbb-outdoor.jpg'

interface IContactItemProps {
  title: React.ReactNode
}

const ContactItem: React.FC<IContactItemProps> = ({ title, children }) => (
  <div>
    <h3 className="f4 b lh-title mb2 mt2">{title}</h3>
    {children}
  </div>
)

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <Jumbotron title="Contact Us" imageUrl={BbbOutdoor} />
      <div className="ph3 bg-off-white">
        <div className="center mw6 pv3">
          <h3 className="f4 b lh-title mb2 mt2">Location</h3>
          <p>2429 Iowa St, Lawrence, KS 66049</p>
          <GoogleMap isFrameless />
          <ContactItem title="Temporary COVID-19 Hours">
            <ul>
              <li>Monday - Saturday: 11:00AM - 9:00PM</li>
              <li>Sunday: 11:00AM - 8:00PM</li>
            </ul>
            <p>
              Available for takeout, curbside carryout, delivery and catering.
            </p>
          </ContactItem>
          <ContactItem title="Phone">
            <a href="tel:7858562550">(785) 856-2550</a>
          </ContactItem>
          <ContactItem title="Email">
            <a href="mail:dholiday@biggsribs.com">dholiday@biggsribs.com</a>
          </ContactItem>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
