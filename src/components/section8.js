import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
import './section8.css'

const MySwiperComponent = () => (
    <section class="section-box box-latest-news box-latest-news-2">
        <div class="container"> 
        <div class="row align-items-end">
            <div class="col-lg-8 mb-30">
              <h2 class="heading-2 mb-10">Latest News &amp; Stories</h2>
              <p class="text-lg neutral-700">Pellentesque at posuere tellus. Ut sed dui justo. Phasellus</p>
            </div>
            <div class="col-lg-4 mb-30">
              <div class="box-button-slider box-button-slider-team justify-content-end">
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
  <Swiper
    modules={[Navigation, Autoplay]}
    spaceBetween={30}
    slidesPerView={3}
    autoplay={{ delay: 5000 }}
    loop={true}
                                                                                                                                                                                                                                             
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          
     
  >
    
   <div className='swiper-wrapper'>
    <SwiperSlide> 
    <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="6 / 9"  >
                  <div class="card-news">
                    <div class="card-image"><a href="blog-post.html"><img src="public/it1.webp" alt="Nivia"/></a></div>
                    <div class="card-info"><a class="heading-4" href="blog-post.html">How startups can improve their chances of getting financing</a>
                      <p class="text-md neutral-700 mt-15 mb-35 text-justify">Pellentesque at posuere tellus. Ut sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam laoreet, risus vel laoreet laoreet, mauris</p><a class="btn btn-learmore-2" href="blog-post.html"><span>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_24_999)">
                              <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_24_999">
                                <rect width="13" height="13" fill="white"></rect>
                              </clipPath>
                            </defs>
                          </svg></span>                                            Learn More</a>
                    </div>
                  </div>
                </div>
    </SwiperSlide>
    <SwiperSlide> 
    <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="6 / 9" >
                  <div class="card-news">
                    <div class="card-image"><a href="blog-post.html"><img src="public/it2.webp"alt="Nivia"/></a></div>
                    <div class="card-info"><a class="heading-4" href="blog-post.html">How startups can improve their chances of getting financing</a>
                      <p class="text-md neutral-700 mt-15 mb-35 text-justify">Pellentesque at posuere tellus. Ut sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam laoreet, risus vel laoreet laoreet, mauris</p><a class="btn btn-learmore-2" href="blog-post.html"><span>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_24_999)">
                              <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_24_999">
                                <rect width="13" height="13" fill="white"></rect>
                              </clipPath>
                            </defs>
                          </svg></span>                                            Learn More</a>
                    </div>
                  </div>
                </div>
    </SwiperSlide>
    <SwiperSlide> 
    <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="6 / 9"  >
                  <div class="card-news">
                    <div class="card-image"><a href="blog-post.html"><img src="public/it3.webp" alt="Nivia"/></a></div>
                    <div class="card-info"><a class="heading-4" href="blog-post.html">How startups can improve their chances of getting financing</a>
                      <p class="text-md neutral-700 mt-15 mb-35 text-justify">Pellentesque at posuere tellus. Ut sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam laoreet, risus vel laoreet laoreet, mauris</p><a class="btn btn-learmore-2" href="blog-post.html"><span>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_24_999)">
                              <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_24_999">
                                <rect width="13" height="13" fill="white"></rect>
                              </clipPath>
                            </defs>
                          </svg></span>                                            Learn More</a>
                    </div>
                  </div>
                </div>
    </SwiperSlide>
    <SwiperSlide> 
    <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="6 / 9"  >
                  <div class="card-news">
                    <div class="card-image"><a href="blog-post.html"><img src="public/it4.webp" alt="Nivia"/></a></div>
                    <div class="card-info"><a class="heading-4" href="blog-post.html">How startups can improve their chances of getting financing</a>
                      <p class="text-md neutral-700 mt-15 mb-35 text-justify">Pellentesque at posuere tellus. Ut sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam laoreet, risus vel laoreet laoreet, mauris</p><a class="btn btn-learmore-2" href="blog-post.html"><span>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_24_999)">
                              <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_24_999">
                                <rect width="13" height="13" fill="white"></rect>
                              </clipPath>
                            </defs>
                          </svg></span>                                            Learn More</a>
                    </div>
                  </div>
                </div>
    </SwiperSlide>
    <SwiperSlide> 
    <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="6 / 9"  >
                  <div class="card-news">
                    <div class="card-image"><a href="blog-post.html"><img src="public/it5.webp" alt="Nivia"/></a></div>
                    <div class="card-info"><a class="heading-4" href="blog-post.html">How startups can improve their chances of getting financing</a>
                      <p class="text-md neutral-700 mt-15 mb-35 text-justify">Pellentesque at posuere tellus. Ut sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam laoreet, risus vel laoreet laoreet, mauris</p><a class="btn btn-learmore-2" href="blog-post.html"><span>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_24_999)">
                              <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_24_999">
                                <rect width="13" height="13" fill="white"></rect>
                              </clipPath>
                            </defs>
                          </svg></span>                                            Learn More</a>
                    </div>
                  </div>
                </div>
    </SwiperSlide>
    <SwiperSlide> 
    <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="6 / 9" >
                  <div class="card-news">
                    <div class="card-image"><a href="blog-post.html"><img src="assets/imgs/page/homepage1/img-news3.png" alt="Nivia"/></a></div>
                    <div class="card-info"><a class="heading-4" href="blog-post.html">How startups can improve their chances of getting financing</a>
                      <p class="text-md neutral-700 mt-15 mb-35 text-justify">Pellentesque at posuere tellus. Ut sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam laoreet, risus vel laoreet laoreet, mauris</p><a class="btn btn-learmore-2" href="blog-post.html"><span>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_24_999)">
                              <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_24_999">
                                <rect width="13" height="13" fill="white"></rect>
                              </clipPath>
                            </defs>
                          </svg></span>                                            Learn More</a>
                    </div>
                  </div>
                </div>
    </SwiperSlide>
  </div>
  </Swiper> 
   </div>
   </section>
);

export default MySwiperComponent;
