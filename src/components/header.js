import { useEffect, useState } from "react";

const Header = () => {
    const[isSticky,setIsSticky]=useState(false)
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY < 200) {
            setIsSticky(false);
          } else {
            setIsSticky(true);
          }
        };
    
        // Attach scroll listener
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup listener on component unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    return (
        <>
            <header  className={`header sticky-bar ${isSticky ? "stick" : ""}`}>
                <div class="container">
                    <div class="main-header">
                        <div class="header-left">
                            <div class="header-logo"><a class="d-flex" href="index.html"><img style={{height:"99px", width:"180px"}} alt="Nivia" src="assets/imgs/syntaxlogo.jpg" /></a></div>
                            <div class="header-nav">
                                <nav class="nav-main-menu d-none d-xl-block">
                                    <ul class="main-menu">
                                        <li class="has-children"><a class="active" href="index.html">Home</a>
                                            <ul class="sub-menu">
                                                <li><a href="index.html">Business Solutions</a></li>
                                                <li><a href="index-2.html">Marketing App</a></li>
                                                <li><a href="index-3.html">Web Agency</a></li>
                                                <li><a href="index-4.html">Digital Agency</a></li>
                                                <li><a href="index-5.html">3D Products</a></li>
                                                <li><a href="index-6.html">AI Platform</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children"><a href="about.html">About</a></li>
                                        <li class="has-children"><a href="service.html">Services</a></li>
                                        <li class="mega-li has-children"><a href="#">Pages</a>
                                            <div class="mega-menu">
                                                <div class="mega-menu-inner">
                                                    <div class="row">
                                                        <div class="col-lg-8">
                                                            <div class="row">
                                                                <div class="col-lg-3">
                                                                    <h6>Home</h6>
                                                                    <ul>
                                                                        <li><a href="index.html">Business Solutions</a></li>
                                                                        <li><a href="index-2.html">Marketing App</a></li>
                                                                        <li><a href="index-3.html">Web Agency</a></li>
                                                                        <li><a href="index-4.html">Digital Agency</a></li>
                                                                        <li><a href="index-5.html">3D Products</a></li>
                                                                        <li><a href="index-6.html">AI Platform</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <h6>Pages</h6>
                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <ul>
                                                                                <li><a href="about.html">About Us</a></li>
                                                                                <li><a href="service.html">Services</a></li>
                                                                                <li><a href="integration.html">Integrations</a></li>
                                                                                <li><a href="pricing.html">Pricing Plan</a></li>
                                                                                <li><a href="help.html">Help Center</a></li>
                                                                                <li><a href="careers.html">Careers</a></li>
                                                                                <li><a href="job-detail.html">Job details</a></li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <ul>
                                                                                <li><a href="blog.html">Blog V1</a></li>
                                                                                <li><a href="blog-2.html">Blog V2</a></li>
                                                                                <li><a href="blog-post.html">Blog post</a></li>
                                                                                <li><a href="feature.html">Features V1</a></li>
                                                                                <li><a href="feature-2.html">Features V2</a></li>
                                                                                <li><a href="feature-3.html">Features V3</a></li>
                                                                                <li><a href="contact.html">Contact us</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3">
                                                                    <h6>Utility pages</h6>
                                                                    <ul>
                                                                        <li><a href="register.html">Register</a></li>
                                                                        <li><a href="login.html">Sign In</a></li>
                                                                        <li><a href="forget-password.html">Forgot password</a></li>
                                                                        <li><a href="term-conditions.html">Terms & conditions</a></li>
                                                                        <li><a href="404.html">404 Not found</a></li>
                                                                        <li><a href="change-log.html">Change log</a></li>
                                                                        <li><a href="comming-soon.html">Comming soon</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="box-desc-menu">
                                                                <h6 class="text-16-semibold">Nivia - Modern & Multipurpose Template</h6>
                                                                <p class="text-xs mt-10 mb-25">bootstrap 5, business, corporate, creative, gulp, marketing, minimal, modern, pug, sass...</p><a class="btn btn-black-md btn-rounded" href="#">Get It Now
                                                                    <svg width="22" height="8" viewbox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z" fill=""></path>
                                                                    </svg></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="has-children"><a href="blog.html">Blog</a>
                                            <ul class="sub-menu">
                                                <li><a href="blog.html">Blog V1</a></li>
                                                <li><a href="blog-2.html">Blog V2</a></li>
                                                <li><a href="blog-post.html">Blog post</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children"><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="header-right"><a class="btn btn-search hover-up" href="#"></a>
                            <div class="form-search p-20 dark">
                                <form action="#">
                                    <input class="form-control" type="text" placeholder="Search" />
                                    <input class="btn-search-2" type="submit" value="" />
                                </form>
                                <div class="popular-keywords text-start mt-20">
                                    <p class="mb-10 color-white">Popular search:</p><a class="color-gray-600 mr-10 font-xs" href="#">Platform,</a><a class="color-gray-600 mr-10 font-xs" href="#"># Database,</a><a class="color-gray-600 mr-10 font-xs" href="#"># Price</a>
                                </div>
                            </div><a class="btn btn-brand-4-medium hover-up" href="#">Get Started
                                <svg width="22" height="22" viewbox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill=""></path>
                                </svg></a>
                            <div class="burger-icon burger-icon-white"><span class="burger-icon-top"></span><span class="burger-icon-mid"></span><span class="burger-icon-bottom"></span></div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
                <div class="mobile-header-wrapper-inner">
                    <div class="burger-icon burger-icon-white"><span class="burger-icon-top"></span><span class="burger-icon-mid"></span><span class="burger-icon-bottom"></span></div>
                    <div class="mobile-header-top">
                        <div class="user-account"><img src="assets/imgs/page/homepage6/author.png" alt="Nivia" />
                            <div class="content">
                                <h6 class="user-name">John Smith</h6>
                                <p class="font-xs text-muted">You have 4 new messages</p>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-header-content-area">
                        <div class="perfect-scroll">
                            <div class="mobile-search mobile-header-border mb-30">
                                <form action="#">
                                    <input type="text" placeholder="Search for items…" /><i class="fi-rr-search"></i>
                                </form>
                            </div>
                            <div class="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul class="mobile-menu font-heading">
                                        <li class="has-children"><a class="active" href="index.html">Home Pages</a>
                                            <ul class="sub-menu">
                                                <li><a href="index.html">Business Solutions</a></li>
                                                <li><a href="index-2.html">Marketing App</a></li>
                                                <li><a href="index-3.html">Web Agency</a></li>
                                                <li><a href="index-4.html">Digital Agency</a></li>
                                                <li><a href="index-5.html">3D Products</a></li>
                                                <li><a href="index-6.html">AI Platform</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children"><a href="#">Inner Pages</a>
                                            <ul class="sub-menu">
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="service.html">Our Services</a></li>
                                                <li><a href="pricing.html">Pricing Plan</a></li>
                                                <li><a href="help.html">Help Center</a></li>
                                                <li><a href="integration.html">Integrations</a></li>
                                                <li><a href="careers.html">Careers</a></li>
                                                <li><a href="job-detail.html">Job details</a></li>
                                                <li><a href="feature.html">Features V1</a></li>
                                                <li><a href="feature-2.html">Features V2</a></li>
                                                <li><a href="feature-3.html">Features V3</a></li>
                                                <li><a href="contact.html">Contact us</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children"><a href="#">Blog</a>
                                            <ul class="sub-menu">
                                                <li><a href="blog.html">Blog V1</a></li>
                                                <li><a href="blog-2.html">Blog V2</a></li>
                                                <li><a href="blog-post.html">Blog post</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children"><a href="#">Utility pages</a>
                                            <ul class="sub-menu">
                                                <li><a href="register.html">Register</a></li>
                                                <li><a href="login.html">Sign In</a></li>
                                                <li><a href="forget-password.html">Forgot password</a></li>
                                                <li><a href="term-conditions.html">Terms & conditions</a></li>
                                                <li><a href="404.html">404 Not found</a></li>
                                                <li><a href="change-log.html">Change log</a></li>
                                                <li><a href="comming-soon.html">Comming soon</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="mobile-account">
                                <h6 class="mb-10">Your Account</h6>
                                <ul class="mobile-menu font-heading">
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Work Preferences</a></li>
                                    <li><a href="#">My Boosted Shots</a></li>
                                    <li><a href="#">My Collections</a></li>
                                    <li><a href="#">Account Settings</a></li>
                                    <li><a href="#">Go Pro</a></li>
                                    <li><a href="login.html">Sign Out</a></li>
                                </ul>
                            </div>
                            <div class="mobile-social-icon mb-50">
                                <h6 class="mb-25">Follow Us</h6>
                                <a class="icon-socials icon-facebook" href="#">
                                    <img alt="Nivia" src="assets/imgs/template/icons/fb.svg" /></a>
                                    <a class="icon-socials icon-instagram" href="#" ><img alt="Nivia" src="assets/imgs/template/icons/in.svg" /></a>
                                    <a class="icon-socials icon-twitter" href="#" ><img alt="Nivia" src="assets/imgs/template/icons/tw.svg" /></a>
                                    <a class="icon-socials icon-be" href="#" ><img alt="Nivia" src="assets/imgs/template/icons/be.svg" /></a>
                </div>
                <div class="site-copyright">Copyright 2023 &copy; Nivia.<br/>Designed by AliThemes.</div>
        </div >
        </div >
      </div >
    </div >
        </>
    )
}
export default Header