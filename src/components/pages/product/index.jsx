import React from 'react'
import './product.css'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { AiOutlineStar } from "react-icons/ai";

const FeaturedProduct = () => {
  const [product, setProduct] = useState([]);
  const [noOfProduct, setNoOFProduct] = useState(6);


  //   const fetchFact = () => {
  //  axios.get("https://catfact.ninja/fact").then((response) => {
  //  setProduct(response.data.fact)
  //  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) =>

        setProduct(res.data)
      );
  }, []);
  const slice = product.slice(0, noOfProduct)
  const loadMore = () => {
    setNoOFProduct(noOfProduct + noOfProduct)
  }
  return (
    <div>

      <div className='feature-container'>
        <h3>Featured Products</h3>

        <div className='featured-box'>
          {slice.map((post) => {
            const { name, email, address, website, phone } = post
            return (
              <div className='box'>
                <img className='dog-img' src="image/dogs.png" />
                <p className='name'>{post.name}</p>
                <p className='price'>N165343</p>
                <p className='star'><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><span><AiOutlineStar /></span></p>
              </div>
            )
          })}



          {/* <div className='box'>

            <p>Title</p>
            <p>Rating</p>
          </div>
          <div className='box'>

            <p>Title</p>
            <p>Rating</p>
          </div> */}
        </div>
        <div className='see-more'> <button onClick={() => loadMore()}>See More</button></div>

      </div>
    </div>
  )
}

export default FeaturedProduct
