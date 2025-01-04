import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-style-3 footer-style-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-30">
            <a href="index.html">
            <img style={{height:"180px", width:"280px"}} alt="Nivia" src="assets/imgs/bg-logo.png" /></a>            
            <div className="mt-20 mb-20">
              <p className="text-md neutral-600 mb-10">
              Add:- 3rd Floor, Crystal Plaza, SCS 78, opp. Pims Hospital, Jalandhar, Punjab 144001 </p>
              <p className="text-md neutral-600">Hours: 9:00 - 17:00, Mon - Sat</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-30">
                <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">About</h5>
                <ul className="menu-footer">
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press Media</a></li>
                  <li><a href="#">History</a></li>
                  <li><a href="#">Sitemap</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-30">
                <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">Services</h5>
                <ul className="menu-footer">
                  <li><a href="#">Software Development</a></li>
                  <li><a href="#">IT Consulting</a></li>
                  <li><a href="#">Cloud Services</a></li>
                  <li><a href="#">Cyber-Security Services</a></li>
                  <li><a href="#">Managed IT Services</a></li>
                
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-30">
                <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">Our Project</h5>
                <ul className="menu-footer">
                  <li><a href="https://techcadd.com/">TECHCADD.COM</a></li>
                  <li><a href="https://shrishyamimmigration.ca/">SHRISHYAM</a></li>
                  <li><a href="https://instituteofanimationandmultimedia.com/">IAM </a></li>
                  <li><a href="https://whitehorseieltsacademy.com/Jalandhar/">WHITEHORSE</a></li>
                 </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-30">
                <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">Support</h5>
                <ul className="menu-footer">
                  <li><a href="#">Forum Support</a></li>
                  <li><a href="#">Help & FAQ</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-0">
          <div className="row align-items-end">
            <div className="col-lg-6 mb-20">
              <h5 className="text-18-semibold neutral-0">Join our newsletter</h5>
              <p className="text-sm neutral-600 mb-20">No ads. No trials. No commitments.</p>
              <div className="form-newsletter form-newsletter-2">
                <form>
                  <input className="form-control" type="text" placeholder="Email address" />
                  <button className="btn btn-brand-4-medium">
                    Subscribe
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end text-center">
              <div className="row align-items-end">
                <div className="col-md-6 mb-20">
                  <div className="text-center text-md-start">
                    <div className="text-start d-inline-block">
                      <p className="text-lg title-follow neutral-0">
                        Follow us
                        <div className="box-socials-footer">
                          <a className="icon-socials icon-facebook" href="#">
                            <img alt="Nivia" src="assets/imgs/template/icons/fb.svg" />
                          </a>
                          <a className="icon-socials icon-instagram" href="#">
                            <img alt="Nivia" src="assets/imgs/template/icons/in.svg" />
                          </a>
                          <a className="icon-socials icon-twitter" href="#">
                            <img alt="Nivia" src="assets/imgs/template/icons/tw.svg" />
                          </a>
                          <a className="icon-socials icon-be" href="#">
                            <img alt="Nivia" src="assets/imgs/template/icons/be.svg" />
                          </a>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
