import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
import './section8.css'

const TeamCarousel = () => (
  <section class="section-box box-latest-news box-latest-news-2">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class=" mb-30 text-center">
        <div class="text-center"><a class="btn btn-brand-4-sm" href="#">Our people</a></div>
          <h2 class="heading-2 mb-10">Meet Our Team</h2>
          <p class="text-lg neutral-700">This is our team, a lot of smiling happy people who work hard to
            empower your teams.</p>
        </div>

      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{ delay: 5000 }}
        loop={true}

        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}


      >

        <div className='swiper-container swiper-group-4 '>
          <SwiperSlide>
            <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="6 / 9"  >
            
              <div class="swiper-slide">
                <div class="card-team-2">
                  <div class="card-image"><img src="assets/imgs/page/homepage2/team1.png" alt="Niv
                        #ia"/></div>
                  <div class="card-info"><a href="#">
                    <h6>Olivia Williams</h6></a>
                    <p class="text-lg neutral-600">Master Trainer</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="6 / 9" >
            <div class="swiper-slide">
                    <div class="card-team-2">
                      <div class="card-image"><img src="assets/imgs/page/homepage2/team1.png" alt="Niv
                        #ia"/></div>
                      <div class="card-info"><a href="#">
                          <h6>Olivia Williams</h6></a>
                        <p class="text-lg neutral-600">Master Trainer</p>
                      </div>
                    </div>
                  </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="6 / 9"  >
            <div class="swiper-slide">
                    <div class="card-team-2">
                      <div class="card-image"><img src="assets/imgs/page/homepage2/team1.png" alt="Niv
                        #ia"/></div>
                      <div class="card-info"><a href="#">
                          <h6>Olivia Williams</h6></a>
                        <p class="text-lg neutral-600">Master Trainer</p>
                      </div>
                    </div>
                  </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="6 / 9"  >
            <div class="swiper-slide">
                    <div class="card-team-2">
                      <div class="card-image"><img src="assets/imgs/page/homepage2/team1.png" alt="Niv
                        #ia"/></div>
                      <div class="card-info"><a href="#">
                          <h6>Olivia Williams</h6></a>
                        <p class="text-lg neutral-600">Master Trainer</p>
                      </div>
                    </div>
                  </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="6 / 9"  >
            <div class="swiper-slide">
                    <div class="card-team-2">
                      <div class="card-image"><img src="assets/imgs/page/homepage2/team1.png" alt="Niv
                        #ia"/></div>
                      <div class="card-info"><a href="#">
                          <h6>Olivia Williams</h6></a>
                        <p class="text-lg neutral-600">Master Trainer</p>
                      </div>
                    </div>
                  </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="6 / 9" >
            <div class="swiper-slide">
                    <div class="card-team-2">
                      <div class="card-image"><img src="assets/imgs/page/homepage2/team1.png" alt="Niv
                        #ia"/></div>
                      <div class="card-info"><a href="#">
                          <h6>Olivia Williams</h6></a>
                        <p class="text-lg neutral-600">Master Trainer</p>
                      </div>
                    </div>
                  </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>

      <div class=" mb-5 ">
              <div class="box-button-slider box-button-slider-team justify-content-center">
                <div class="swiper-button-prev swiper-button-prev-testimonials swiper-button-prev-3" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-608d9cc3461d5eba">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66667 3.33398L2 8.00065M2 8.00065L6.66667 12.6673M2 8.00065H14" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div class="swiper-button-next swiper-button-next-testimonials swiper-button-next-3" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-608d9cc3461d5eba">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 3.33398L14 8.00065M14 8.00065L9.33333 12.6673M14 8.00065H2" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
    </div>
  </section>
);

export default TeamCarousel;
