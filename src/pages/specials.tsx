import React from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import BbbOutdoor from '../images/bbb-outdoor.jpg'

interface ISpecialProps {
  day: React.ReactNode
  title: React.ReactNode
  price?: React.ReactNode
}

const Special: React.FC<ISpecialProps> = ({ day, title, price, children }) => (
  <>
    <h3 className="f4 b lh-title mb2 mt2">{day}</h3>
    <p>
      {title} {price && <strong>{price}</strong>}
    </p>
    <p>{children}</p>
  </>
)

function SpecialsPage() {
  return (
    <Layout>
      <Jumbotron title="Specials" imageUrl={BbbOutdoor} />
      <div className="ph3 bg-off-white">
        <div className="center mw6 pv3">
          <Special
            day="Sunday"
            title="Aunt T Dot’s Fried Chicken"
            price="$12.00"
          >
            All you care to eat Aunt T'Dots Fried Chicken served with two
            homemade sides. Now also available with uncle Homer's Crispy Smoked
            Chicken!
          </Special>
          <Special
            day="Monday"
            title="Uncle Homer’s Crispy Smoked Chicken"
            price="$12.00"
          >
            Served with cornbread and some of that good honey butter along with
            two of our homemade sides.
          </Special>
          <Special day="Tuesday" title="Bacon Meatball Pasta" price="$10.00">
            Bacon meatballs on top of elbow pasta with barbecue marinara, cheese
            and a side of garlic toast.
          </Special>
          <Special day="Wednesday" title="Rib 'N' Rib Combo" price="$13.00">
            Three bones of baby back and three bones of St. Louis with two side.
            A great way to try 'em both!
          </Special>
          <Special
            day="Thursday"
            title="Hot Link Mac 'N' Cheese"
            price="$11.00"
          >
            Creamy mac 'n' cheese with our special garlic herb mix and our
            delicious spicy hot links mixed in... it is fabulous!
          </Special>
          <Special day="Friday" title="Steak Night!">
            Served with baked potato and one side. Every Friday from 5:00pm to
            close.
          </Special>
        </div>
      </div>
    </Layout>
  )
}

export default SpecialsPage
