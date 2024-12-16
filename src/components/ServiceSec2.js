import React from 'react'
import "./AboutSec1.css";

const ServiceSec2 = () => {
  return (
    
    <section class="section-box wow animate__animated animate__fadeIn box-why-choose-us">
    <div class="container">
      <div class="text-center"> <a class="btn btn-tag-black" href="#">Why Should Your Choose Us?</a>
        <h2 class="mt-15 mb-65">We know how to manage business globally</h2>
      </div>
      <div class="row"> 
        <div class="col-lg-6">
          <div class="box-info-casestudy"> 
            <h3 class="mb-40">We bring solutions to make life<br class="d-none d-lg-block"/>easier for our clients.</h3>
            <div class="row"> 
              <div class="col-lg-12"> 
                <div class="card-casestudy">
                  <div class="card-title"> 
                    <h6> <span class="number">1</span>Requirement Analysis</h6>
                  </div>
                  <div class="card-desc"> 
                    <p>Simple and cost effective to run high-performance queries on petabytes of semi-structured and structured data so that you can build powerful reports and dashboards.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="card-casestudy">
                  <div class="card-title"> 
                    <h6> <span class="number">2</span>Magic Touch</h6>
                  </div>
                  <div class="card-desc"> 
                    <p>Simple and cost effective to run high-performance queries on petabytes of semi-structured and structured data so that you can build powerful reports and dashboards.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-12"> 
                <div class="card-casestudy">
                  <div class="card-title"> 
                    <h6> <span class="number">3</span>Data Analysis</h6>
                  </div>
                  <div class="card-desc"> 
                    <p>Simple and cost effective to run high-performance queries on petabytes of semi-structured and structured data so that you can build powerful reports and dashboards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="box-image-why"> <img src="assets/imgs/page/services/img-chart.png" alt="Nivia"/><img src="assets/imgs/page/services/img-chart2.png" alt="Nivia"/></div>
          <div class="box-info-total-rate"> 
            <div class="item-rate-total"> 
              <div class="top-info-between">
                <h6 class="text-star">Business Development </h6><span class="num-percen text-label">75%</span>
              </div>
              <div class="box-info-progress"> 
                <div class="progress">
                  <div class="progress-bar" role="progressbar" 
                 aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
                </div>
              </div>
            </div>
            <div class="item-rate-total"> 
              <div class="top-info-between">
                <h6 class="text-star">Client Management</h6><span class="num-percen text-label">82%</span>
              </div>
              <div class="box-info-progress"> 
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{width: "82%" }}aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div class="item-rate-total"> 
              <div class="top-info-between">
                <h6 class="text-star">Customer Satisfaction</h6><span class="num-percen text-label">68%</span>
              </div>
              <div class="box-info-progress"> 
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{width: "82%" }}aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
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

export default ServiceSec2
