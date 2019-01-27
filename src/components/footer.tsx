import React from 'react'
import { Link } from 'gatsby'
import BiggsLogo from '../images/biggs-logo.png'

const Footer: React.FC = () => (
  <footer className="bg-black ph3 pv4 white">
    <div className="mw7 center pt3">
      <div className="measure-narrow center mb4">
        <img
          src={BiggsLogo}
          alt="Biggs BBQ logo"
          className="db w4 center mb4 br0"
        />
      </div>

      <div className="flex-ns justify-between">
        <div>
          <h3 className="f4 b lh-title mb1 primary">Biggs BBQ</h3>
          <ul className="mb3">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menus" className="link">
                Menus
              </Link>
            </li>
            <li>
              <Link to="/specials" className="link">
                Specials
              </Link>
            </li>
            <li>
              <Link to="/catering" className="link">
                Catering
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/order-online" className="link">
                Order Online
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="f4 b lh-title mb1 primary">Hours</h3>
          <ul className="mb3">
            <li>Monday - Saturday: 11:00AM - 10:00PM</li>
            <li>Sunday: 11:00AM - 9:00PM</li>
          </ul>
          <h3 className="f4 b lh-title mb1 primary">Location</h3>
          <ul className="mb3">
            <li>2429 Iowa Street</li>
            <li>Lawrence, KS 66046</li>
          </ul>
        </div>

        <div>
          <h3 className="f4 b lh-title mb2 primary">Contact</h3>
          <ul className="mhn2">
            <li>
              Phone: <a href="tel:7858562550">785-856-2550</a>
            </li>
            <li>
              Email:{' '}
              <a href="mail:dholiday@biggsribs.com">dholiday@biggsribs.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
