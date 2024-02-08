import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
<div>
  <footer className="text-center text-white footer1" style={{backgroundColor: 'black'}}>
    <div className="container">
      <section>
        <div className="row text-center d-flex justify-content-center pt-5">
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to='/about' className="text-white text-decoration-none">About us</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to='/contact' className="text-white text-decoration-none">Contact</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to='/policy' className="text-white text-decoration-none">Privacy Policy</Link>
            </h6>
          </div>
        </div>
      </section>
      
    </div>
    <div className="text-center p-3 footer1" style={{backgroundColor: 'black'}}>
      © 2023 Copyright
      
    </div>
  </footer>
</div>


    </>
  )
};

export default Footer;