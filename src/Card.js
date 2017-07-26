import React from 'react'

const Card = ({ id, title, text, picture, footer }) =>
  <div className="card" style={{ width: '20rem' }}>
    <div className="card-block text-center">
      <img style={{width: '100%'}} className="card-img-top" src={picture} />
      <h4 className="card-title">{title}</h4>
      <h5>Tapez {id}</h5>
      <p className="card-text">
        {text}
      </p>
    </div>
    <div className="card-footer text-muted">
      {footer}
    </div>
  </div>

  export default Card
