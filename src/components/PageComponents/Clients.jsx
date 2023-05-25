import React from 'react'

function Clients({ img1, img2, img3, img4 }) {
  return (
    <div id='Clients' className='clients'>
        <section className="grid-section">
            <div className="team">
                <p className='red-text'>Meet the team</p>
                <h1>We are chilled and a laidback team</h1>
                <p className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='gallery'>
                <img src={img1} alt="Teamate photo" className='img1' />
                <div className="side">
                    <img src={img2} alt="Teamate photo" className='img2' />
                    <img src={img3} alt="Teamate photo" className='img3' />
                </div>
            </div>
        </section>
        <p className='quote'>“Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”</p>
        <div className='teamate'>
            <img src={img4} alt="Teamate photo" />
            <div className='teamate-info'>
                <h3>Carlos Tran</h3>
                <p>The Decorate Gatsby</p>
            </div>
        </div>
    </div>
  )
}

export default Clients