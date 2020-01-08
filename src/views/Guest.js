import React, { useState, useEffect } from 'react'
import Navbar from 'components/navbar'
import Header from 'components/header'
import Footer from 'components/footer'

const Guest = (props) => {
  const hotProducts = [
    { id: 1, price: 129, task: 'Replace the oil, air, fuel filter', dealer: 'Eastside Auto', image: 'product1.jpg', sale: 40, rate: 80 },
    { id: 2, price: 88, task: 'Check the battery and charging system', dealer: 'Horizon Garage', image: 'product2.jpg', sale: 0, rate: 80 },
    { id: 3, price: 275, task: 'Use a scan tool to read trouble code', dealer: 'Basant Motor', image: 'product3.jpg', sale: 0, new: true, rate: 80 },
    { id: 4, price: 90, task: 'Check level and refill brake fluid/clutch fluid', dealer: 'Eastside Auto', image: 'product4.jpg', sale: 0, rate: 80 },
    { id: 5, price: 160, task: 'Grease and lubricate components', dealer: 'Eastside Auto', image: 'product5.jpg', sale: 0, rate: 80 },
    { id: 6, price: 100, task: 'Check for any Error codes in the ECU and take corrective action.', dealer: 'Basant Motor', image: 'product6.jpg', sale: 0, rate: 80 },
    { id: 7, price: 245, task: 'Use a scan tool to read trouble code', dealer: 'Eastside Auto', image: 'product7.jpg', sale: 0, rate: 80 },
    { id: 8, price: 120, task: 'Check Brake Pads/Liners, Brake Discs/Drums', dealer: 'Horizon Garage', image: 'product8.jpg', sale: 0, rate: 80 },
  ]
  let [basket, addBasket] = useState([])
  const add2Basket = (data) => {
    const newBasket = [...basket.filter(b=> b.id !== data.id)]
    newBasket.push(data)
    localStorage.setItem('basket', JSON.stringify(newBasket))
    addBasket(newBasket)
  }
  useEffect(() => {
    const basketLocal = localStorage.getItem('basket')
    const newBasket = basketLocal ? JSON.parse(basketLocal) : []
    addBasket(newBasket)
  }, [])
  return (
    <div>
      <Header basket={basket} />
      <Navbar />
      <div id="page">
        {/* <Slideshow /> */}

        <div className="section-element container">
          <div className="row">
            <div className="large-6">
              <div className="wpb_wrapper">
                <div className="banner">
                  <div className="banner-content">
                    <h4>Tire Replacing</h4>
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
                                    <div className="item-img-info"> <a className="product-image" href="#product_detail"> <img alt="" src={`products-images/${pd.image}`} /> </a>
                                      {pd.sale ? <div className="sale-label sale-top-right">- 40%</div> : ''}
                                      {pd.new ? <div className="new-label new-top-left">new</div> : ''}
                                      <div className="box-hover">
                                        <ul className="add-to-links">
                                          <li><a className="link-quickview" href="#quick_view">&nbsp;</a> </li>
                                          <li><a className="link-wishlist" href="#wishlist">&nbsp;</a> </li>
                                          <li><a className="link-compare" href="#compare">&nbsp;</a> </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item-info">
                                    <div className="info-inner">
                                      <div className="item-title"> <a href="#product_detail">{pd.task}</a> </div>
                                      <div className="brand">{pd.dealer}</div>
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
                                  <div className="item-img-info"> <a className="product-image" href="#product_detail"> <img alt="" src="products-images/product14.jpg" /> </a>

                                    <div className="box-hover">
                                      <ul className="add-to-links">
                                        <li><a className="link-quickview" href="#quick_view">&nbsp;</a> </li>
                                        <li><a className="link-wishlist" href="#wishlist">&nbsp;</a> </li>
                                        <li><a className="link-compare" href="#compare">&nbsp;</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title"> <a href="#product_detail"> Assembly Rcoker Arm Intake Interior Product</a> </div>
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
                                  <div className="item-img-info"> <a className="product-image" href="#product_detail"> <img alt="" src="products-images/product15.jpg" /> </a>

                                    <div className="box-hover">
                                      <ul className="add-to-links">
                                        <li><a className="link-quickview" href="#quick_view">&nbsp;</a> </li>
                                        <li><a className="link-wishlist" href="#wishlist">&nbsp;</a> </li>
                                        <li><a className="link-compare" href="#compare">&nbsp;</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title"> <a href="#product_detail"> Assembly Rcoker Arm Intake Interior Product </a> </div>
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
                                  <div className="item-img-info"> <a className="product-image" href="#product_detail"> <img alt="" src="products-images/product12.jpg" /> </a>

                                    <div className="box-hover">
                                      <ul className="add-to-links">
                                        <li><a className="link-quickview" href="#quick_view">&nbsp;</a> </li>
                                        <li><a className="link-wishlist" href="#wishlist">&nbsp;</a> </li>
                                        <li><a className="link-compare" href="#compare">&nbsp;</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title"> <a href="#product_detail">Assembly Rcoker Arm Intake Interior Product</a> </div>
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
                                  <div className="item-img-info"> <a className="product-image" title="Assembly Rcoker Arm Intake Interior Product" href="#product_detail"> <img alt="" src="products-images/product14.jpg" /> </a>

                                    <div className="box-hover">
                                      <ul className="add-to-links">
                                        <li><a className="link-quickview" href="#quick_view">&nbsp;</a> </li>
                                        <li><a className="link-wishlist" href="#wishlist">&nbsp;</a> </li>
                                        <li><a className="link-compare" href="#compare">&nbsp;</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title"> <a title="Assembly Rcoker Arm Intake Interior Product" href="#product_detail">Assembly Rcoker Arm Intake Interior Product</a> </div>
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
                                  <div className="item-img-info"> <a className="product-image" title="Assembly Rcoker Arm Intake Interior Product" href="#product_detail"> <img alt="" src="products-images/product13.jpg" /> </a>

                                    <div className="box-hover">
                                      <ul className="add-to-links">
                                        <li><a className="link-quickview" href="#quick_view">&nbsp;</a> </li>
                                        <li><a className="link-wishlist" href="#wishlist">&nbsp;</a> </li>
                                        <li><a className="link-compare" href="#compare">&nbsp;</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title"> <a title="Assembly Rcoker Arm Intake Interior Product" href="#product_detail">Assembly Rcoker Arm Intake Interior Product</a> </div>
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
                                  <div className="item-img-info"> <a className="product-image" title="Assembly Rcoker Arm Intake Interior Product" href="#product_detail"> <img alt="" src="products-images/product12.jpg" /> </a>

                                    <div className="box-hover">
                                      <ul className="add-to-links">
                                        <li><a className="link-quickview" href="#quick_view">&nbsp;</a> </li>
                                        <li><a className="link-wishlist" href="#wishlist">&nbsp;</a> </li>
                                        <li><a className="link-compare" href="#compare">&nbsp;</a> </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-info">
                                  <div className="info-inner">
                                    <div className="item-title"> <a title="Assembly Rcoker Arm Intake Interior Product" href="#product_detail">Assembly Rcoker Arm Intake Interior Product</a> </div>
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
                            <div className="item-title"> <a href="#product_detail" title="Assembly Rcoker Arm Intake Interior Product"> Assembly Rcoker Arm Intake</a> </div>
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
                                <li><a className="link-quickview" href="#quick_view">&nbsp;</a> </li>
                                <li><a className="link-wishlist" href="#wishlist">&nbsp;</a> </li>
                                <li><a className="link-compare" href="#compare">&nbsp;</a> </li>
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
                    <h4 className="title">Powerful tool and flexible time</h4>
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
                    <h4 className="title">Unlimited colors with good design</h4>
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
      </div>

     
      <Footer/>
    </div>
  )
}
export default Guest