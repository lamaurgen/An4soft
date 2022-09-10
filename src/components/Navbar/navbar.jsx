import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='navleft'>


                    <p>PET</p> <span className='pet'>SHOP</span>



                </div>

                <div className='navmid'
                >
                    <ul>
                        <li>
                            <a>Home</a>
                            <a>Featured</a>
                            <a>Categories</a>
                            <a>Contactus</a>

                        </li>
                    </ul>


                </div>

                <div className='navright'>
                    <button className='btnblue'>Signup</button>
                    <button className='btnblack'>Login</button>

                </div>

            </div>

        </div>
    )
}

export default Navbar
