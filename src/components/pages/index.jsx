import React from 'react'



import Navbar from '../Navbar/navbar'
import Footer from './Footer'

import './home.css'

import FeaturedProduct from './product'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='container' >
        <div className='left'>
          <div className='left-content'>
            <p className='title'>.Let's Help Treat Your </p><p className='title-next'>Pet Right</p>
            <p>Shop the best products for your pets from top brands in the industry</p>

            <input type="text" placeholder='Search' />
            <button className='shop'>Shop Now</button>

          </div>
        </div>


        <div className='right'>
          <div className='right-content'>
            <img className='bg-img' src="image/dog.png" />
            {/* <button>Live chat</button> */}

          </div>

        </div>
      </div>

      <div className='box-title'>
        <img className="logos" src="image/esewa.png" />
        <img className="logos" src="image/flutterwave1.png" />
        <img className="logos" src="image/ime.png" />
        <img className="logos" src="image/paypal.png" />
      </div>
      <FeaturedProduct />
      <div className='news-container'   >
        <img className='featured-img' src="image/cats.png" />
        <div className='bg-news'>
          <h3>Subscibe to our NewsLetter</h3>
          <p>Get update with tips on how to treat your pets right and <span>latest products suitable for your pets</span></p>
          <input type="text" placeholder='Enter your Email'></input>
          <button>Subscribe</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
