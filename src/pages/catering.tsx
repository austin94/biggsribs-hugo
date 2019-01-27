import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/jumbotron'
import BbbOutdoor from '../images/bbb-outdoor.jpg'

/** Menu Images */
import CateringMenu1 from '../images/catering-menu-1.jpg'
import CateringMenu2 from '../images/catering-menu-2.jpg'

const CateringPage: React.FC = () => {
  const menus: string[] = [CateringMenu1, CateringMenu2]

  return (
    <Layout>
      <SEO title="Catering" />
      <Jumbotron title="Catering" imageUrl={BbbOutdoor} />
      <div className="ph3 bg-off-white">
        <div className="center mw6 pv3">
          <p>
            Bigg’s Barbecue can provide a wide range of catering services for
            your next party or event. Please fill out the form below and a
            Bigg’s Barbecue representative will contact you to help plan your
            event. Bigg’s Barbecue can provide a wide range of catering services
            for your next party or event. Please call the number below and a
            Bigg’s Barbecue representative will contact you to help plan your
            event.
          </p>
          <h3 className="f4 b lh-title mb2 mt2">
            Please call (785) 856-2550 for catering requests, quotes, and
            information
          </h3>
          {menus.map((menu, key) => (
            <img
              key={key}
              className="w-100 mw-100"
              src={menu}
              alt="Menu image"
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default CateringPage
