import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/jumbotron'
import BbqSlide01 from '../images/bbq-slide-01-blur.png'

/** Menu Images */
import DinnerMenu1 from '../images/dinner-menu-1.jpg'
import DinnerMenu2 from '../images/dinner-menu-2.jpg'
import CateringMenu1 from '../images/catering-menu-1.jpg'
import CateringMenu2 from '../images/catering-menu-2.jpg'
import GlutenFreeMenu1 from '../images/gluten-free-menu-1.jpg'
import GlutenFreeMenu2 from '../images/gluten-free-menu-2.jpg'

const MenusPage: React.FC = () => {
  const menus: string[] = [
    DinnerMenu1,
    DinnerMenu2,
    CateringMenu1,
    CateringMenu2,
    GlutenFreeMenu1,
    GlutenFreeMenu2,
  ]

  return (
    <Layout>
      <SEO title="Menus" />
      <Jumbotron title="Our Menus" imageUrl={BbqSlide01} />
      <div className="mw7 mt3 mb3 center">
        {menus.map((menu, key) => (
          <img key={key} className="w-100 mw-100" src={menu} alt="Menu image" />
        ))}
      </div>
    </Layout>
  )
}

export default MenusPage
