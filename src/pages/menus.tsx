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
import GlutenFreeMenu from '../images/gluten-free-menu.jpg'

const MenuPreview: React.FC<{ menuSrc: string; menuAlt: string }> = ({
  menuSrc,
  menuAlt,
}) => <img className="w-100 mw-100" src={menuSrc} alt={menuAlt} />

const MenusPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Menus" />
      <Jumbotron title="Our Menus" imageUrl={BbqSlide01} />
      <div className="mw7 mt3 mb3 center">
        <h2>Dinner Menu</h2>
        <MenuPreview menuSrc={DinnerMenu1} menuAlt="Dinner Menu Page 1" />
        <MenuPreview menuSrc={DinnerMenu2} menuAlt="Dinner Menu Page 2" />
        <h2>Catering Menu</h2>
        <MenuPreview menuSrc={CateringMenu1} menuAlt="Catering Menu Page 1" />
        <MenuPreview menuSrc={CateringMenu2} menuAlt="Catering Menu Page 2" />
        <h2>Gluten Sensitive Menu</h2>
        <MenuPreview menuSrc={GlutenFreeMenu} menuAlt="Gluten Free Menu" />
      </div>
    </Layout>
  )
}

export default MenusPage
