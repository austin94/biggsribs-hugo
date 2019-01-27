import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/jumbotron'
import BbbOutdoor from '../images/bbb-outdoor.jpg'

const OrderOnlinePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Order Online" />
      <Jumbotron title="Order Online" imageUrl={BbbOutdoor} />
      <div className="ph3 bg-off-white">
        <div className="center mw6 pv3">
          <script
            type="text/javascript"
            src="https://eatstreet.com/API/whitelabel_api.js"
          />
          <iframe
            id="restmenu"
            name="restmenu"
            src="https://eatstreet.com/API?restaurantId=3007"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              border: 0,
              width: '100%',
              height: '650px',
              display: 'block',
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default OrderOnlinePage
