import React from 'react'

/* Home section import and assets */
import Home from './PageComponents/Home'
import img0 from '../assets/heroImage.jpg'

/* Services section import and assets */
import Services from './PageComponents/Services'

/* Our Work section import and assets */
import Work from './PageComponents/Work'
import img1 from '../assets/smarthome.jpg'
import img2 from '../assets/onboard.png'
import img3 from '../assets/booking.png'
import img4 from '../assets/juice-product.png'

/* Clients section import and assets */
import Clients from './PageComponents/Clients'
import person1 from '../assets/person3.png'
import person2 from '../assets/person1.png'
import person3 from '../assets/person2.png'
import person4 from '../assets/person4.png'

function Body() {
  return (
    <div className="body">
      <Home srcImg={img0} />
      <div id='Services' className="services">
        <h3>We offer high demand services</h3>
        <div className="services-card">
          <Services svgSrc={"M794 390 666 262l42-42q17-17 42.5-16.5T793 221l43 43q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Z"} hText={"UI/UX Design"} className={"light-blue"} />
          <Services svgSrc={"M320 814 80 574l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"} hText={"Front End"} className={"green"} />
          <Services svgSrc={"M286.882 339Q266 339 251.5 353.618q-14.5 14.617-14.5 35.5Q237 410 251.618 424.5q14.617 14.5 35.5 14.5Q308 439 322.5 424.382q14.5-14.617 14.5-35.5Q337 368 322.382 353.5q-14.617-14.5-35.5-14.5Zm0 414Q266 753 251.5 767.618q-14.5 14.617-14.5 35.5Q237 824 251.618 838.5q14.617 14.5 35.5 14.5Q308 853 322.5 838.382q14.5-14.617 14.5-35.5Q337 782 322.382 767.5q-14.617-14.5-35.5-14.5ZM154 217h651q16 0 25.5 9.5t9.5 25.813V521q0 17.425-9.5 29.213Q821 562 805 562H154q-15 0-24.5-11.787Q120 538.425 120 521V252.313q0-16.313 9.5-25.813T154 217Zm0 413h647q15 0 27 12.5t12 28.527V935q0 20-12 30.5T801 976H159q-16 0-27.5-10.5T120 935V671.027q0-16.027 9.5-28.527T154 630Z"} hText={"Back End"} className={"red"} />
        </div>
      </div>
      <div id='Work' className="ourWork">
        <h3>Good design means good business</h3>
        <div className="gallery-work">
          <Work srcImg={img1} altImg={"Full stack application"} pText={"Full stack application"} hText={"Smart home dashboard"} className="work down" />
          <Work srcImg={img2} altImg={"UX/UI design"} pText={"UX/UI design"} hText={"Onboard application"} className="work" />
          <Work srcImg={img3} altImg={"Mobile application"} pText={"Mobile application"} hText={"Booking system"} className="work down" />
          <Work srcImg={img4} altImg={"Front End applicati on"} pText={"Front End applicati on"} hText={"Juice product homepage"} className="work down-less" />
        </div>
        <p className="alignRight">
          <button><span>See more &rarr;</span></button>
        </p>
      </div>
      <Clients img1={person1} img2={person2} img3={person3} img4={person4} />
    </div>
  )
}

export default Body

/* To improve the organization of the page, I created multiple page components and added each section of the page to its respective component. */
