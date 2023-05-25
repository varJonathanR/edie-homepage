import React from 'react'

function Work({ className, srcImg, altImg, pText, hText }) {
  return (
    <div className={className}>
        <div className="img-container">
          <img src={srcImg} alt={altImg} />
        </div>
        <p>{pText}</p>
        <h4>{hText}</h4>
    </div>
  )
}

export default Work