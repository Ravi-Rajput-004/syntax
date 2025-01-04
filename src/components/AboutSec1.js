import React from 'react'
import "./AboutSec1.css";

const AboutSec1 = () => {
  return (
    
      <section className="about1 section-box box-about-section-1">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6" >
              <div className="padding-left-auto" style={{paddingTop:"8%"}}><a className="btn btn-tag-black" href="#">About Us</a>
                <h2 className="display-2 mt-15 mb-25">This is Who We Are</h2>
                <p className="text-xl mb-45">The true secret of our success lies in people behind the screen. And with them, our culture.</p>
                <div className="box-buttons-feature-4"><a className="btn btn-brand-4-medium mr-20" href="#">Subscribe
                    <svg width="22" height="8" viewbox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill=""></path>
                    </svg></a><a className="btn btn-learmore-2" href="#"><span>
                      <svg width="39" height="38" viewbox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" width="38" height="38" rx="19" fill="#191919"></rect>
                        <g clip-path="url(#clip0_1_376)">
                          <path d="M24.1537 16.8139L15.218 25.7497L13.75 24.2817L22.6847 15.3459H14.81V13.2695H26.2301V24.6897H24.1537V16.8139Z" fill="#C5FF55"></path>
                        </g>
                        <defs>
                          <clippath id="clip0_1_376">
                            <rect width="13" height="13" fill="white" transform="translate(13.5 13)"></rect>
                          </clippath>
                        </defs>
                      </svg></span>Learn More</a></div>
                <div className="box-border-left-author">
                  <p className="text-22-bold">We facilitate the creation of strategy, design, and implementation</p>
                  <div className="box-joined">
                    <div className="box-authors"><span classNameName="item-author"><img src="assets/imgs/page/homepage1/author.png" alt="Nivia"/></span><span classNameName="item-author"><img src="assets/imgs/page/homepage1/author2.png" alt="Nivia"/></span><span classNameName="item-author"><img src="assets/imgs/page/homepage1/author3.png" alt="Nivia"/></span><span classNameName="item-author"><span classNameName="text-num-author text-md-bold color-brand-2">+2k</span></span></div><span className="text-lg d-inline-block">Join thousands of users in using<br className="d-none d-md-block"/>the Nivia platform!</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-image-rect"><img src="assets/imgs/page/about/img-about.png" alt="Nivia"/><a className="btn btn-play popup-youtube text-lg" href="https://www.youtube.com/watch?v=SZEflIVnhH8">
                  <div className="video-play-button"><span></span></div></a></div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="box-image-rect box-image-rect-both"><img src="assets/imgs/page/about/img-about2.png" alt="Nivia"/></div>
            </div>
            <div className="col-lg-6">
              <div className="padding-right-auto">
                <div className="box-padding-left-50 box-padding-right-50" style={{marginTop:"120px"}}>
                  <div className="strate-icon"><span></span> Strategies that work</div>
                  <h2 className="heading-2 mb-20">Track the progress towards objectives with key results</h2>
                  <p className="text-lg neutral-700">Nivia is an independent web design studio with a rich history. Founded in 1999, it gathered the best web designers & developers.</p>
                  <div className="row mt-50">
                    <div className="col-xl-6 col-lg-12 col-sm-6">
                      <div className="card-feature-2">
                        <div className="card-image"><img src="assets/imgs/page/homepage3/discover.svg"/></div>
                        <div className="card-info"><a href="#">
                            <h3 className="text-22-bold">Web and App design premium tools</h3></a></div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-sm-6">
                      <div className="card-feature-2">
                        <div className="card-image"><img src="assets/imgs/page/homepage3/keep.svg"/></div>
                        <div className="card-info"><a href="#">
                            <h3 className="text-22-bold">Leading Brand Building expert</h3></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  )
}

export default AboutSec1
