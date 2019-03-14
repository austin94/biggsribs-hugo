import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import BiggsLogo from '../images/biggs-logo.png'

const Header: React.FC = () => (
  <>
    <nav className="overflow-x-scroll overflow-x-visible-ns flex justify-between items-center center bg-white divider-grey relative">
      <Link to="/" className="pa3 db mr4 h-100 w4 flex-none">
        <img
          src={BiggsLogo}
          alt="Biggs BBQ logo"
          className="br0 db mb0 w-100"
        />
      </Link>
      <ul className="flex b grey-3">
        <li>
          <Link to="/menus" className="pa3 no-underline db">
            Menus
          </Link>
        </li>
        <li>
          <Link to="/specials" className="pa3 no-underline db">
            Specials
          </Link>
        </li>
        <li>
          <Link to="/catering" className="pa3 no-underline db">
            Catering
          </Link>
        </li>
        <li>
          <Link to="/contact" className="pa3 no-underline db">
            Contact
          </Link>
        </li>
        <li>
          <a
            href="https://www.orderbiggsbbq.com"
            target="_blank"
            className="pa3 no-underline db"
          >
            Order Online
          </a>
        </li>
      </ul>
    </nav>
  </>
)

export default Header
