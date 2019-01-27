import React from 'react'

interface IJumbotronProps {
  title: string
  imageUrl: string
  subtitle?: string
}

const Jumbotron: React.FC<IJumbotronProps> = ({
  title,
  subtitle,
  imageUrl,
}) => (
  <div
    className="pv5 pv6-l ph3 bg-center cover"
    style={{ backgroundImage: `url('${imageUrl}')` }}
  >
    <div className="mw7 center ph3">
      <div className="db mb3">
        <div className="mw7 relative bg-fix-primary mb3">
          <h1 className="f2 f1-l b di lh-title mb3 white mw6 bg-primary">
            {title}
          </h1>
        </div>
        <div className="mw7 relative bg-fix-primary">
          {subtitle && (
            <p className="b f4 di lh-title mb3 white mw6 bg-primary">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Jumbotron
