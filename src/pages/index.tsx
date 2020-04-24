import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/jumbotron'
import GoogleMap from '../components/google-map'
import BbqSlide01 from '../images/bbq-slide-01-blur.png'
import BbqSlide03 from '../images/bbq-slide-03.png'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`bbq`, `lawrence`, `kansas`, `ribs`, `pulled pork`]}
    />
    <Jumbotron
      title="Biggs BBQ"
      subtitle="Your local BBQ joint"
      imageUrl={BbqSlide01}
    />
    <div className="bg-grey-1 pv4">
      <div className="flex-l mhn1-l ph3 center mw7">
        <p className="w-100 mw-100 tc">
          <strong className="b">COVID-19 Update:</strong> Takeout, delivery, and
          catering available 11:00AM-8:00PM
        </p>
      </div>
    </div>
    <div className="bg-off-white pv4">
      <div className="ph3 mw7 center">
        <h2 className="f2 b lh-title mb2">Our food</h2>
        <div className="flex-ns mhn2-ns mb3">
          <div className="ph2-ns w-50-ns">
            Bigg’s barbecue is unique. Unlike traditional Kansas City-style
            barbecue, all the meat — brisket, pork, chicken and sausage — is
            served with light sauce to accentuate the hickory-smoked flavor of
            the meat and Bigg’s special dry rubs. Our three famous sauces are
            served on the side.
          </div>
          <img
            src={BbqSlide03}
            alt="Burgers by Biggs sign"
            className="ph2-ns w-50-ns center db mb3"
          />
        </div>
        <div className="tc">
          <Link to="/menus" className="btn raise">
            View Menus
          </Link>
        </div>
      </div>
    </div>
    <GoogleMap />
    <div className="bg-off-white pv4">
      <div className="ph3 mw7 center">
        <h2 className="f2 b lh-title mb3">Delivery</h2>
        <p>
          We deliver to your door, hot fresh and fast, in most cases less than
          45 minutes call 856-2550! We do not recommend any fried items for
          delivery as they are so much better when you are here!
        </p>
        <div className="tc">
          <a
            href="https://www.orderbiggsbbq.com"
            target="_blank"
            className="btn raise"
          >
            Order Online
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
