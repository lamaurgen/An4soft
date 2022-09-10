import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="row">
                        <div className="footer-col  ">
                            <h4>About</h4>

                            <p>Blossom Brows has the experience and expertise to get the job done right the first time. Our skilled professionals use only the finest tools and products to give you the look you want. We guarantee your satisfaction.</p>

                        </div>


                        <div className="footer-col " >
                            <h4>Locate us </h4>


                            <div className="mapouter" id="mapouter">
                                <div className="gmap_canvas" id="map_canvas">
                                    <iframe className="map" id="map" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">

                                    </iframe>
                                    <a href="https://123movies-to.org"></a>
                                    <a href="https://www.embedgooglemap.net"></a>
                                </div>

                                {/* <iframe width="100%" height="250" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br /> */}
                            </div>



                        </div>

                        <div className="footer-col  ">
                            <div className='footer-link'>
                                <h4>Quick Links</h4>
                                <ul>

                                    <li><a href="#"> Home</a></li>
                                    <li><a href="#"> Featured</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Blogs</a></li>
                                    <li><a href="#"> Contact Us</a></li>


                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="row-copyright ">
                        <p className="copyright"> copyright -2022-Petshop-All rights reserved.
                        </p>
                        <p className='icons'>icons</p>
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Footer
