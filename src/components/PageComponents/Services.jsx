import React from 'react'

function ServiceCard({ svgSrc, hText, className }) {
  return (
    <div className='card'>
      <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60" className={className}><path d={svgSrc} /></svg>
      <h1>{hText}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
      <button>Get started</button>
    </div>
  )
}

export default ServiceCard