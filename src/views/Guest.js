import React, { useState } from 'react'
import Navbar from 'components/navbar'
import Header from 'components/header'

const Guest = () => {
  const hotProducts = [
    { id: 1, price: 129, desc: 'Assembly Rcoker Arm Intake Interior Product', make: 'Datsun', image: 'product1.jpg', sale: 40, rate: 80 },
    { id: 2, price: 88, desc: 'Assembly Rcoker Arm Intake Interior Product', make: 'Xperia', image: 'product11.jpg', sale: 0, rate: 80 },
    { id: 3, price: 275, desc: 'Assembly Rcoker Arm Intake Interior Product', make: 'Sunproto', image: 'product3.jpg', sale: 0, new: true, rate: 80 },
    { id: 4, price: 90, desc: 'Assembly Rcoker Arm Intake Interior Product', make: 'Impulse', image: 'product4.jpg', sale: 0, rate: 80 },
  ]
  let [basket, addBasket] = useState([])
  const add2Basket = (data) => {
    const newBasket = [...basket, data]
    addBasket(newBasket)
  }
  return (
    <div>
      <Header basket={basket}/>
      <Navbar />
      <div id="page">
        {/* <Slideshow /> */}

        <div className="section-element container">
          <div className="row">
            <div className="large-6">
              <div className="wpb_wrapper">
                <div className="banner">
                  <div className="banner-content">
                    <h4>Modern Collection</h4>
                    <h5>Sale upto 50% off </h5>
                    <a href="##" className="readmore-link">Read more <i className="fa fa-chevron-circle-right"></i></a>
                  </div>
                  <div className="banner-img">
                    <a href="##"><img src="/images/banner1.jpg" alt="" /></a>
                  </div>

                </div>
              </div>
            </div>
            <div className="nasa-col large-6 columns desktop-padding-left-5  vc_">
              <div className="wpb_wrapper">
                <div className="large-6">
                  <div className="wpb_wrapper">

                    <div className="banner" style={{ border: '1px solid #e8c506' }}>
                      <div className="banner-content1">
                        <h6 style={{ color: '#df3737' }}>"Shop123"</h6>
                        <h3>Use Promo Code</h3>
                        <p>Get Upto 20% Off</p>
                      </div>
                      <div className="banner-img">
                        <a href="##"><img src="/images/h2-banner-white.jpg" alt="" /> </a>
                      </div></div>
                  </div>
                </div>

                <div className="large-6">
                  <div className="wpb_wrapper">
                    <div className="banner">
                      <div className="banner-img">
                        <a href="##">
                          <img src="/images/banner2.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="row margin-top-5">
                <div className="large-12">
                  <div className="wpb_wrapper">
                    <div className="banner">
                      <div className="banner-content">

                        <h4>Decorative</h4>
                        <h5>Now starting at $99</h5>
                        <a href="##" className="readmore-link">Read more <i className="fa fa-chevron-circle-right"></i></a>
                      </div>
                      <div className="banner-img">
                        <a href="##">
                          <img src="/images/banner3.jpg" alt="" />

                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="content-page">

            <div className="category-product">
              <div className="navbar nav-menu">
                <div className="navbar-collapse">
                  <h1>Trending</h1>
                  <ul className="nav navbar-nav">
                    <li className="active"><a data-toggle="tab" href="##tab-1">Hot Products</a></li>
                    <li className=" "><a data-toggle="tab" href="##tab-2">New Arrivals</a></li>
                    <li className=""><a data-toggle="tab" href="##tab-3" className="active">Todays Deals</a></li>
                  </ul>
                </div>

              </div>
              <div className="product-bestseller">
                <div className="product-bestseller-content">
                  <div className="product-bestseller-list">
                    <div className="tab-container">
                      <div className="tab-panel active" id="tab-1">
                        <div className="category-products">
                          <ul className="products-grid">
                            {hotProducts.length ? hotProducts.map((pd, i) =>
                              <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6" key={i}>
                                <div className="item-inner">
                                  <div className="item-img">
                                    <div className="item-img-info"> <a className="product-image" href="#product_detail.html"> <img alt="" src={`products-images/${pd.image}`} /> </a>
                                      {pd.sale ? <div className="sale-label sale-top-right">- 40%</div> : ''}
                                      {pd.new ? <div className="new-label new-top-left">new</div> : ''}
                                      <div className="box-hover">
                                        <ul className="add-to-links">
                                          <li><a className="link-quickview" href="#quick_view.html">&nbsp;</a> </li>
                                          <li><a className="link-wishlist" href="#wishlist.html">&nbsp;</a> </li>
                                          <li><a className="link-compare" href="#compare.html">&nbsp;</a> </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item-info">
                                    <div className="info-inner">
                                      <div className="item-title"> <a href="#product_detail.html">{pd.desc}</a> </div>
                                      <div className="brand">Impulse</div>
                                      <div className="rating">
                                        <div className="ratings">
                                          <div className="rating-box">
                                            <div style={{ width: '80%' }} className="rating"></div>
                                          </div>
                                          <p className="rating-links"> <a href="##">1 Review(s)</a> <span className="separator">|</span> <a href="##">Add Review</a> </p>
                                        </div>
                                      </div>
                                      <div className="item-content">
                                        <div className="item-price">
                                          <div className="price-box"> <span className="regular-price"> <span className="price">${pd.price}.00</span> </span> </div>
                                        </div>
                                        <div className="action">
                                          <button className="button btn-cart" type="button" data-original-title="Add to Cart" onClick={() => add2Basket(pd)}>
                                            <i className="fa fa-shopping-basket"></i>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ) : ''}

                          </ul>
                        </div>
                      </div>


                      <div className="tab-panel " id="tab-2">
                        <div className="category-products">
                          <ul className="products-grid">
                            <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="item-inner">
                                <div className="item-img">
                                  <div className="item-img-info"> <a className="product-image" href="#product_detail.html"> <img alt="" src="products-images/product14.jpg" /> </a>

                                    <div className="box-hover">
                                      <ul className="add-to-links">
                                        <li><a className="link-quickview" href="#quick_view.html">&nbsp;</a> </li>
                                        <li><a className="link-wishlist" href="#wishlist.html">&nbsp;</a> </li>
                                        <li><a className="link-compare" href="#compare.html">&nbsp;</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title"> <a href="#product_detail.html"> Assembly Rcoker Arm Intake Interior Product</a> </div>
                                    <div className="brand">Impulse</div>
                                    <div className="rating">
                                      <div className="ratings">
                                        <div className="rating-box">
                                          <div style={{ width: '80%' }} className="rating"></div>
                                        </div>
                                        <p className="rating-links"> <a href="##">1 Review(s)</a> <span className="separator">|</span> <a href="##">Add Review</a> </p>
                                      </div>
                                    </div>
                                    <div className="item-content">
                                      <div className="item-price">
                                        <div className="price-box"> <span className="regular-price"> <span className="price">$88.00</span> </span> </div>
                                      </div>
                                      <div className="action">
                                        <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><i className="fa fa-shopping-basket"></i></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </li>
                            <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="item-inner">
                                <div className="item-img">
                                  <div className="item-img-info"> <a className="product-image" href="#product_detail.html"> <img alt="" src="products-images/product15.jpg" /> </a>

                                    <div className="box-hover">
                                      <ul className="add-to-links">
                                        <li><a className="link-quickview" href="#quick_view.html">&nbsp;</a> </li>
                                        <li><a className="link-wishlist" href="#wishlist.html">&nbsp;</a> </li>
                                        <li><a className="link-compare" href="#compare.html">&nbsp;</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title"> <a href="#product_detail.html"> Assembly Rcoker Arm Intake Interior Product </a> </div>
                                    <div className="brand">Livia</div>
                                    <div className="rating">
                                      <div className="ratings">
                                        <div className="rating-box">
                                          <div style={{ width: '80%' }} className="rating"></div>
                                        </div>
                                        <p className="rating-links"> <a href="##">1 Review(s)</a> <span className="separator">|</span> <a href="##">Add Review</a> </p>
                                      </div>
                                    </div>
                                    <div className="item-content">
                                      <div className="item-price">
                                        <div className="price-box"> <span className="regular-price"> <span className="price">$88.00</span> </span> </div>
                                      </div>
                                      <div className="action">
                                        <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><i className="fa fa-shopping-basket"></i></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </li>
                            <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="item-inner">
                                <div className="item-img">
                                  <div className="item-img-info"> <a className="product-image" href="#product_detail.html"> <img alt="" src="products-images/product12.jpg" /> </a>

                                    <div className="box-hover">
                                      <ul className="add-to-links">
                                        <li><a className="link-quickview" href="#quick_view.html">&nbsp;</a> </li>
                                        <li><a className="link-wishlist" href="#wishlist.html">&nbsp;</a> </li>
                                        <li><a className="link-compare" href="#compare.html">&nbsp;</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title"> <a href="#product_detail.html">Assembly Rcoker Arm Intake Interior Product</a> </div>
                                    <div className="brand">Just Wow</div>
                                    <div className="rating">
                                      <div className="ratings">
                                        <div className="rating-box">
                                          <div style={{ width: '80%' }} className="rating"></div>
                                        </div>
                                        <p className="rating-links"> <a href="##">1 Review(s)</a> <span className="separator">|</span> <a href="##">Add Review</a> </p>
                                      </div>
                                    </div>
                                    <div className="item-content">
                                      <div className="item-price">
                                        <div className="price-box"> <span className="regular-price"> <span className="price">$88.00</span> </span> </div>
                                      </div>
                                      <div className="action">
                                        <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><i className="fa fa-shopping-basket"></i></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </li>

                          </ul>
                        </div>
                      </div>
                      <div className="tab-panel " id="tab-3">
                        <div className="category-products">
                          <ul className="products-grid">
                            <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="item-inner">
                                <div className="item-img">
                                  <div className="item-img-info"> <a className="product-image" title="Assembly Rcoker Arm Intake Interior Product" href="#product_detail.html"> <img alt="" src="products-images/product14.jpg" /> </a>

                                    <div className="box-hover">
                                      <ul className="add-to-links">
                                        <li><a className="link-quickview" href="#quick_view.html">&nbsp;</a> </li>
                                        <li><a className="link-wishlist" href="#wishlist.html">&nbsp;</a> </li>
                                        <li><a className="link-compare" href="#compare.html">&nbsp;</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title"> <a title="Assembly Rcoker Arm Intake Interior Product" href="#product_detail.html">Assembly Rcoker Arm Intake Interior Product</a> </div>
                                    <div className="brand">Cello</div>
                                    <div className="rating">
                                      <div className="ratings">
                                        <div className="rating-box">
                                          <div style={{ width: '80%' }} className="rating"></div>
                                        </div>
                                        <p className="rating-links"> <a href="##">1 Review(s)</a> <span className="separator">|</span> <a href="##">Add Review</a> </p>
                                      </div>
                                    </div>
                                    <div className="item-content">
                                      <div className="item-price">
                                        <div className="price-box"> <span className="regular-price"> <span className="price">$88.00</span> </span> </div>
                                      </div>
                                      <div className="action">
                                        <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><i className="fa fa-shopping-basket"></i></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </li>
                            <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="item-inner">
                                <div className="item-img">
                                  <div className="item-img-info"> <a className="product-image" title="Assembly Rcoker Arm Intake Interior Product" href="#product_detail.html"> <img alt="" src="products-images/product13.jpg" /> </a>

                                    <div className="box-hover">
                                      <ul className="add-to-links">
                                        <li><a className="link-quickview" href="#quick_view.html">&nbsp;</a> </li>
                                        <li><a className="link-wishlist" href="#wishlist.html">&nbsp;</a> </li>
                                        <li><a className="link-compare" href="#compare.html">&nbsp;</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title"> <a title="Assembly Rcoker Arm Intake Interior Product" href="#product_detail.html">Assembly Rcoker Arm Intake Interior Product</a> </div>
                                    <div className="brand">Shreeji Ethnic</div>
                                    <div className="rating">
                                      <div className="ratings">
                                        <div className="rating-box">
                                          <div style={{ width: '80%' }} className="rating"></div>
                                        </div>
                                        <p className="rating-links"> <a href="##">1 Review(s)</a> <span className="separator">|</span> <a href="##">Add Review</a> </p>
                                      </div>
                                    </div>
                                    <div className="item-content">
                                      <div className="item-price">
                                        <div className="price-box"> <span className="regular-price"> <span className="price">$88.00</span> </span> </div>
                                      </div>
                                      <div className="action">
                                        <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><i className="fa fa-shopping-basket"></i></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </li>
                            <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="item-inner">
                                <div className="item-img">
                                  <div className="item-img-info"> <a className="product-image" title="Assembly Rcoker Arm Intake Interior Product" href="#product_detail.html"> <img alt="" src="products-images/product12.jpg" /> </a>

                                    <div className="box-hover">
                                      <ul className="add-to-links">
                                        <li><a className="link-quickview" href="#quick_view.html">&nbsp;</a> </li>
                                        <li><a className="link-wishlist" href="#wishlist.html">&nbsp;</a> </li>
                                        <li><a className="link-compare" href="#compare.html">&nbsp;</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title"> <a title="Assembly Rcoker Arm Intake Interior Product" href="#product_detail.html">Assembly Rcoker Arm Intake Interior Product</a> </div>
                                    <div className="brand">Zacharias</div>
                                    <div className="rating">
                                      <div className="ratings">
                                        <div className="rating-box">
                                          <div style={{ width: '80%' }} className="rating"></div>
                                        </div>
                                        <p className="rating-links"> <a href="##">1 Review(s)</a> <span className="separator">|</span> <a href="##">Add Review</a> </p>
                                      </div>
                                    </div>
                                    <div className="item-content">
                                      <div className="item-price">
                                        <div className="price-box"> <span className="regular-price"> <span className="price">$88.00</span> </span> </div>
                                      </div>
                                      <div className="action">
                                        <button className="button btn-cart" type="button" title="" data-original-title="Add to Cart"><i className="fa fa-shopping-basket"></i></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </li>

                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="container">
          <div className="wide-banner">
            <div className="row">
              <div className="figure banner-with-effects effect-sadie1 banner-width  with-button"><img src="/images/watch.jpg" alt="" />
                <div className="figcaption">
                  <div className="banner-content right top"><em>Beat Brand</em>
                    <h5>Digital <span>World</span></h5>
                    <h6>Save 50% Today</h6>
                    <a href="##" className="right bottom btn_type_1" rel="nofollow">Read more <i className="fa fa-chevron-circle-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="figure banner-with-effects effect-sadie1 banner-width  with-button"><img src="/images/shoes-banner.jpg" alt="" />
                <div className="figcaption">
                  <div className="banner-content left top">
                    <em>Don't miss</em>
                    <h5>New <span>Generation</span></h5>
                    <h6>Get Free delivery </h6>

                    <a href="##" className="left bottom btn_type_1" rel="nofollow">Read more <i className="fa fa-chevron-circle-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <section className="deals-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <h2>Deal of the day</h2>
                <div className="hot-deal">

                  <ul className="products-grid">
                    <li className="right-space two-height item">
                      <div className="item-inner">
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a href="#product_detail.html" title="Assembly Rcoker Arm Intake Interior Product"> Assembly Rcoker Arm Intake</a> </div>
                            <div className="brand">Xperia</div>
                            <div className="item-content">
                              <div className="rating">
                                <div className="ratings">
                                  <div className="rating-box">
                                    <div className="rating" style={{ width: '80%' }}></div>
                                  </div>
                                  <p className="rating-links"> <a href="##">1 Review(s)</a> <span className="separator">|</span> <a href="##">Add Review</a> </p>
                                </div>
                              </div>
                              <div className="item-price">
                                <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> <span className="old-price"><span className="price">$199.00</span></span></div>
                              </div>
                              <div className="box-timer">
                                <div className="countbox_1 timer-grid"></div>
                              </div>
                              <div className="offer-text">Hurry Up! Limited time offer</div>
                            </div>
                          </div>
                        </div>
                        <div className="item-img">
                          <div className="item-img-info"> <a href="##" title="Assembly Rcoker Arm Intake Interior Product" className="product-image" > <img src="products-images/product5.jpg" alt="Assembly Rcoker Arm Intake Interior Product" /> </a>
                            <div className="hot-label hot-top-left">Hot Deal</div>
                            <div className="box-hover">
                              <ul className="add-to-links">
                                <li><a className="link-quickview" href="#quick_view.html">&nbsp;</a> </li>
                                <li><a className="link-wishlist" href="#wishlist.html">&nbsp;</a> </li>
                                <li><a className="link-compare" href="#compare.html">&nbsp;</a> </li>
                              </ul>
                            </div>

                          </div>
                        </div>

                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                {/* <Testimonial /> */}
              </div>
            </div>
          </div>
        </section>






        <section className="home-articles spacer-medium">
          <div className="container css-grid--columns-2">
            <div className="column-left">




              <div className="article-home">
                <div className="article-home__image parallax-parent">
                  <img src="/images/Sophie_editorail-16_500x.jpg" className="parallax-child--second" alt="article image" />
                </div>
                <div className="article-home__content">
                  <div className="inside">
                    <p className="date">June 01, 2018</p>
                    <h4 className="title">Powerful and flexible Ecommerce Theme</h4>
                    <a href="##" className="link">Read more <i className="fa fa-chevron-circle-right"></i></a>
                  </div>
                </div>
              </div>




              <div className="article-home">
                <div className="article-home__image parallax-parent">
                  <img src="/images/drake_500x.jpg" className="parallax-child--second" alt="article image" />
                </div>
                <div className="article-home__content">
                  <div className="inside">
                    <p className="date">June 07, 2018</p>
                    <h4 className="title">unlimited colors with good design</h4>
                    <a href="##" className="link">Read more <i className="fa fa-chevron-circle-right"></i></a>
                  </div>
                </div>
              </div>



            </div>

            <div className="column-right">




              <div className="article-home">
                <div className="article-home__image parallax-parent">
                  <img src="/images/BLOG_2_square_1000x.jpg" className="parallax-child--second" alt="article image" />
                </div>
                <div className="article-home__content">
                  <div className="inside">
                    <p className="date">June 14, 2018</p>
                    <h4 className="title">Awesome template with lot's of features</h4>
                    <a href="##" className="link">Read more <i className="fa fa-chevron-circle-right"></i></a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>






        <footer className="footer">

          <div className="newsletter-wrap">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="newsletter">
                    <form>
                      <div>
                        <h4><span>Sign up to Newsletter</span></h4>
                        <input type="text" placeholder="Enter your email address" className="input-text" title="Sign up for our newsletter" id="newsletter1" name="email" />
                        <button className="subscribe" title="Subscribe" type="submit"><span>Subscribe</span></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="footer-middle">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="footer-column pull-left">
                    <h4>Shopping Guide</h4>
                    <ul className="links">
                      <li><a href="#blog.html" title="How to buy">Blog</a></li>
                      <li><a href="#faq.html" title="FAQs">FAQs</a></li>
                      <li><a href="##" title="Payment">Payment</a></li>
                      <li><a href="##" title="Shipment">Shipment</a></li>
                      <li><a href="##" title="Where is my order?">Where is my order?</a></li>
                      <li><a href="##" title="Return policy">Return policy</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="footer-column pull-left">
                    <h4>Style Advisor</h4>
                    <ul className="links">
                      <li><a href="#login.html" title="Your Account">Your Account</a></li>
                      <li><a href="##" title="Information">Information</a></li>
                      <li><a href="##" title="Addresses">Addresses</a></li>
                      <li><a href="##" title="Addresses">Discount</a></li>
                      <li><a href="##" title="Orders History">Orders History</a></li>
                      <li><a href="##" title="Order Tracking">Order Tracking</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="footer-column pull-left">
                    <h4>Information</h4>
                    <ul className="links">
                      <li><a href="#sitemap.html" title="Site Map">Site Map</a></li>
                      <li><a href="##" title="Search Terms">Search Terms</a></li>
                      <li><a href="##" title="Advanced Search">Advanced Search</a></li>
                      <li><a href="#about_us.html" title="About Us">About Us</a></li>
                      <li><a href="#contact_us.html" title="Contact Us">Contact Us</a></li>
                      <li><a href="##" title="Suppliers">Suppliers</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <h4>Contact Us</h4>
                  <div className="contacts-info">
                    <address><i className="add-icon"></i>ThemesGround, 789 Main rd,<br /> Anytown, CA 12345 USA<br />
                    </address>
                    <div className="phone-footer"><i className="phone-icon"></i>+ 888 456-7890</div>
                    <div className="email-footer"><i className="email-icon"></i><a href="#mailto:abc@example.com">Harrier@themesground.com</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <div className="social">
                    <ul>
                      <li className="fb"><a href="##"></a></li>
                      <li className="tw"><a href="##"></a></li>
                      <li className="googleplus"><a href="##"></a></li>
                      <li className="rss"><a href="##"></a></li>
                      <li className="pintrest"><a href="##"></a></li>
                      <li className="linkedin"><a href="##"></a></li>
                      <li className="youtube"><a href="##"></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12 coppyright"> &copy; 2018 ThemesGround. All Rights Reserved. </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="payment-accept"> <img src="/images/payment-1.png" alt="" /> <img src="/images/payment-2.png" alt="" /> <img src="/images/payment-3.png" alt="" /> <img src="/images/payment-4.png" alt="" /> </div>
                </div>
              </div>
            </div>
          </div>

        </footer>
      </div>

      <div id="mobile-menu">
        <ul>
          <li>
            <div className="mm-search">
              <form id="search1" name="search">
                <div className="input-group">
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit"><i className="fa fa-search"></i> </button>
                  </div>
                  <input type="text" className="form-control simple" placeholder="Search ..." name="srch-term" id="srch-term" />
                </div>
              </form>
            </div>
          </li>
          <li> <a href="#index-2.html">Home</a>
            <ul>
              <li><a href="#index-2.html">Home Version 1</a></li>
              <li><a href="#http://themesground.com/harrier-demo/home2/index.html">Home Version 2</a></li>
            </ul>
          </li>
          <li> <a href="##">Pages</a>
            <ul>
              <li><a href="#grid.html">Grid</a> </li>
              <li> <a href="#list.html">List</a> </li>
              <li> <a href="#product_detail.html">Product Detail</a> </li>
              <li> <a href="#shopping_cart.html">Shopping Cart</a> </li>
              <li><a href="#checkout.html">Checkout</a> </li>
              <li> <a href="#wishlist.html">Wishlist</a> </li>
              <li> <a href="#dashboard.html">Dashboard</a> </li>
              <li> <a href="#multiple_addresses.html">Multiple Addresses</a> </li>
              <li> <a href="#about_us.html">About us</a> </li>
              <li> <a href="#blog.html">Blog</a>
                <ul>
                  <li><a href="#blog-detail.html">Blog Detail</a> </li>
                </ul>
              </li>
              <li><a href="#contact_us.html">Contact us</a> </li>
              <li><a href="#404error.html">404 Error Page</a> </li>
            </ul>
          </li>
          <li> <a href="##">Women</a>
            <ul>
              <li> <a href="##" className="">Stylish Bag</a>
                <ul>
                  <li> <a href="#grid.html" className="">Clutch Handbags</a> </li>
                  <li> <a href="#grid.html" className="">Diaper Bags</a> </li>
                  <li> <a href="#grid.html" className="">Bags</a> </li>
                  <li> <a href="#grid.html" className="">Hobo handbags</a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html">Material Bag</a>
                <ul>
                  <li> <a href="#grid.html">Beaded Handbags</a> </li>
                  <li> <a href="#grid.html">Fabric Handbags</a> </li>
                  <li> <a href="#grid.html">Handbags</a> </li>
                  <li> <a href="#grid.html">Leather Handbags</a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html">Shoes</a>
                <ul>
                  <li> <a href="#grid.html">Flat Shoes</a> </li>
                  <li> <a href="#grid.html">Flat Sandals</a> </li>
                  <li> <a href="#grid.html">Boots</a> </li>
                  <li> <a href="#grid.html">Heels</a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html">Jwellery</a>
                <ul>
                  <li> <a href="#grid.html">Bracelets</a> </li>
                  <li> <a href="#grid.html">Necklaces &amp; Pendent</a> </li>
                  <li> <a href="#grid.html">Pendants</a> </li>
                  <li> <a href="#grid.html">Pins &amp; Brooches</a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html">Dresses</a>
                <ul>
                  <li> <a href="#grid.html">Casual Dresses</a> </li>
                  <li> <a href="#grid.html">Evening</a> </li>
                  <li> <a href="#grid.html">Designer</a> </li>
                  <li> <a href="#grid.html">Party</a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html">Swimwear</a>
                <ul>
                  <li> <a href="#grid.html">Swimsuits</a> </li>
                  <li> <a href="#grid.html">Beach Clothing</a> </li>
                  <li> <a href="#grid.html">Clothing</a> </li>
                  <li> <a href="#grid.html">Bikinis</a> </li>
                </ul>
              </li>
            </ul>
          </li>
          <li> <a href="#grid.html">Men</a>
            <ul>
              <li> <a href="#grid.html" className="">Shoes</a>
                <ul className="level1">
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Sport Shoes</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Casual Shoes</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Leather Shoes</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">canvas shoes</a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html">Dresses</a>
                <ul className="level1">
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Casual Dresses</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Evening</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Designer</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Party</a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html">Jackets</a>
                <ul className="level1">
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Coats</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Formal Jackets</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Leather Jackets</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Blazers</a> </li>
                </ul>
              </li>
              <li> <a href="##.html">Watches</a>
                <ul className="level1">
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Fasttrack</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Casio</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Titan</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Tommy-Hilfiger</a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html">Sunglasses</a>
                <ul className="level1">
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Ray Ban</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Fasttrack</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Police</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Oakley</a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html">Accesories</a>
                <ul className="level1">
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Backpacks</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Wallets</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Laptops Bags</a> </li>
                  <li className="level2 nav-6-1-1"><a href="#grid.html">Belts</a> </li>
                </ul>
              </li>
            </ul>
          </li>
          <li> <a href="#grid.html">Electronics</a>
            <ul>
              <li> <a href="#grid.html"><span>Mobiles</span></a>
                <ul>
                  <li> <a href="#grid.html"><span>Samsung</span></a> </li>
                  <li> <a href="#grid.html"><span>Nokia</span></a> </li>
                  <li> <a href="#grid.html"><span>IPhone</span></a> </li>
                  <li> <a href="#grid.html"><span>Sony</span></a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html" className=""><span>Accesories</span></a>
                <ul>
                  <li> <a href="#grid.html"><span>Mobile Memory Cards</span></a> </li>
                  <li> <a href="#grid.html"><span>Cases &amp; Covers</span></a> </li>
                  <li> <a href="#grid.html"><span>Mobile Headphones</span></a> </li>
                  <li> <a href="#grid.html"><span>Bluetooth Headsets</span></a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html"><span>Cameras</span></a>
                <ul>
                  <li> <a href="#grid.html"><span>Camcorders</span></a> </li>
                  <li> <a href="#grid.html"><span>Point &amp; Shoot</span></a> </li>
                  <li> <a href="#grid.html"><span>Digital SLR</span></a> </li>
                  <li> <a href="#grid.html"><span>Camera Accesories</span></a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html"><span>Audio &amp; Video</span></a>
                <ul>
                  <li> <a href="#grid.html"><span>MP3 Players</span></a> </li>
                  <li> <a href="#grid.html"><span>IPods</span></a> </li>
                  <li> <a href="#grid.html"><span>Speakers</span></a> </li>
                  <li> <a href="#grid.html"><span>Video Players</span></a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html"><span>Computer</span></a>
                <ul>
                  <li> <a href="#grid.html"><span>External Hard Disk</span></a> </li>
                  <li> <a href="#grid.html"><span>Pendrives</span></a> </li>
                  <li> <a href="#grid.html"><span>Headphones</span></a> </li>
                  <li> <a href="#grid.html"><span>PC Components</span></a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html"><span>Appliances</span></a>
                <ul>
                  <li> <a href="#grid.html"><span>Vaccum Cleaners</span></a> </li>
                  <li> <a href="#grid.html"><span>Indoor Lighting</span></a> </li>
                  <li> <a href="#grid.html"><span>Kitchen Tools</span></a> </li>
                  <li> <a href="#grid.html"><span>Water Purifier</span></a> </li>
                </ul>
              </li>
            </ul>
          </li>
          <li> <a href="#grid.html">Furniture</a>
            <ul>
              <li> <a href="#grid.html">Living Room</a>
                <ul>
                  <li> <a href="#grid.html">Racks &amp; Cabinets</a> </li>
                  <li> <a href="#grid.html">Sofas</a> </li>
                  <li> <a href="#grid.html">Chairs</a> </li>
                  <li> <a href="#grid.html">Tables</a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html" className="">Dining &amp; Bar</a>
                <ul>
                  <li> <a href="#grid.html">Dining Table Sets</a> </li>
                  <li> <a href="#grid.html">Serving Trolleys</a> </li>
                  <li> <a href="#grid.html">Bar Counters</a> </li>
                  <li> <a href="#grid.html">Dining Cabinets</a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html">Bedroom</a>
                <ul>
                  <li> <a href="#grid.html">Beds</a> </li>
                  <li> <a href="#grid.html">Chest of Drawers</a> </li>
                  <li> <a href="#grid.html">Wardrobes &amp; Almirahs</a> </li>
                  <li> <a href="#grid.html">Nightstands</a> </li>
                </ul>
              </li>
              <li> <a href="#grid.html">Kitchen</a>
                <ul>
                  <li> <a href="#grid.html">Kitchen Racks</a> </li>
                  <li> <a href="#grid.html">Kitchen Fillings</a> </li>
                  <li> <a href="#grid.html">Wall Units</a> </li>
                  <li> <a href="#grid.html">Benches &amp; Stools</a> </li>
                </ul>
              </li>
            </ul>



          </li>
          <li><a href="#grid.html">Kids</a> </li>
          <li><a href="#contact-us.html">Contact Us</a> </li>
        </ul>
        <div className="top-links">
          <ul className="links">
            <li><a title="My Account" href="#login.html">My Account</a> </li>
            <li><a title="Wishlist" href="#wishlist.html">Wishlist</a> </li>
            <li><a title="Checkout" href="#checkout.html">Checkout</a> </li>
            <li><a title="Blog" href="#blog.html"><span>Blog</span></a> </li>
            <li className="last"><a title="Login" href="#login.html"><span>Login</span></a> </li>
          </ul>
        </div>
      </div>

    </div>
  )
}
export default Guest