import React, {useState} from 'react'

const Nav = () => {
  const [menu, toggleMenu] = useState(false)
  return (
    <header>
      <nav className="hidden-xs">
        <div className="nav-container">
          <div className="col-md-3 col-xs-12 col-sm-3">
            <div className="mega-container visible-lg visible-md visible-sm">
              <div className="navleft-container">
                <div className="mega-menu-title" onClick={() => toggleMenu(!menu)}>
                  <h3><i className="fa fa-navicon"></i> All Categories</h3>
                </div>
                <div className="mega-menu-category" style={{display: menu ? 'block': 'none'}}>
                  <ul className="nav">
                    <li> <a href="#index-2.html">Layout</a>
                      <div className="wrap-popup column1">
                        <div className="popup">
                          <ul className="nav">
                            <li><a href="#index-2.html">Home Version 1</a></li>
                            <li><a href="#http://themesground.com/harrier-demo/home2/index.html">Home Version 2</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li> <a href="##">Pages</a>
                      <div className="wrap-popup">
                        <div className="popup">
                          <div className="row">
                            <div className="col-sm-6">
                              <ul className="nav">
                                <li><a href="#grid.html"><span>Grid</span></a> </li>
                                <li> <a href="#list.html"> <span>List</span> </a> </li>
                                <li> <a href="#product_detail.html"> <span>Product Detail</span> </a> </li>
                                <li> <a href="#shopping_cart.html"> <span>Shopping Cart</span> </a> </li>
                                <li><a href="#checkout.html"><span>Checkout</span></a> </li>
                                <li> <a href="#wishlist.html"> <span>Wishlist</span> </a> </li>
                              </ul>
                            </div>
                            <div className="col-sm-6 has-sep">
                              <ul className="nav">
                                <li> <a href="#dashboard.html"> <span>Dashboard</span> </a> </li>
                                <li> <a href="#multiple_addresses.html"> <span>Multiple Addresses</span> </a> </li>
                                <li><a href="#compare.html"><span>Compare</span></a> </li>
                                <li><a href="#quick_view.html"><span>Quick View</span></a> </li>
                                <li><a href="#newsletter.html"><span>Newsletter</span></a> </li>
                                <li><a href="#404error.html"><span>404 Error Page</span></a> </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-sub wide"> <a href="##">Interior</a>
                      <div className="wrap-popup">
                        <div className="popup">
                          <div className="row">
                            <div className="col-md-4 col-sm-6">
                              <h3>Audio</h3>
                              <ul className="nav">
                                <li> <a href="#grid.html"><span>Amplifiers</span></a> </li>
                                <li> <a href="#grid.html"><span>Installation Parts</span></a> </li>
                                <li> <a href="#grid.html"><span>Speakers</span></a> </li>
                                <li> <a href="#grid.html"><span>Stereos</span></a> </li>
                              </ul>
                              <br />
                              <h3>Car Seat Covers</h3>
                              <ul className="nav">
                                <li> <a href="#grid.html">Custom Gauges</a> </li>
                                <li> <a href="#grid.html">Steering Wheels</a> </li>
                                <li> <a href="#grid.html">Sun Shades</a> </li>
                                <li> <a href="#grid.html">Leather</a> </li>
                              </ul>
                            </div>
                            <div className="col-md-4 col-sm-6 has-sep">
                              <h3>Lighting</h3>
                              <ul className="nav">
                                <li> <a href="#grid.html">Fog Lights</a> </li>
                                <li> <a href="#grid.html">Headlights</a> </li>
                                <li> <a href="#grid.html">Led lights</a> </li>
                                <li> <a href="#grid.html">Off-Road Lights</a> </li>
                              </ul>
                              <br />
                              <h3>Floor Mats</h3>
                              <ul className="nav">
                                <li> <a href="#grid.html">Tailored car</a> </li>
                                <li> <a href="#grid.html">Floor & cargo</a> </li>
                                <li> <a href="#grid.html">Leather flooring</a> </li>
                                <li> <a href="#grid.html">Smooth mats</a> </li>
                              </ul>
                            </div>
                            <div className="col-md-4 has-sep hidden-sm">
                              <div className="custom-menu-right">
                                <div className="box-banner media">
                                  <div className="add-right"><img src="/images/menu-img1.jpg" alt="" /></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li> <a href="##">Engine</a>
                      <div className="wrap-popup">
                        <div className="popup">
                          <div className="row">
                            <div className="col-md-4 col-sm-6">
                              <h3>Body Parts</h3>
                              <ul className="nav">
                                <li> <a href="#grid.html">Bumpers</a> </li>
                                <li> <a href="#grid.html">Doors</a> </li>
                                <li> <a href="#grid.html">Fenders</a> </li>
                                <li> <a href="#grid.html">Grilles</a> </li>
                              </ul>
                              <br />
                              <h3>Performance</h3>
                              <ul className="nav">
                                <li> <a href="#grid.html"><span>Air Intake Systems</span></a> </li>
                                <li> <a href="#grid.html"><span>Exhaust Systems</span></a> </li>
                                <li> <a href="#grid.html"><span>Power Adders</span></a> </li>
                                <li> <a href="#grid.html"><span>Racing Gear</span></a> </li>
                              </ul>
                            </div>
                            <div className="col-md-4 col-sm-6 has-sep">
                              <h3>Car Safety</h3>
                              <ul className="nav">
                                <li> <a href="#grid.html"><span>Sun Protection</span></a> </li>
                                <li> <a href="#grid.html"><span>LCR Hallcrest</span></a> </li>
                                <li> <a href="#grid.html"><span>Fire Extinguisher</span></a> </li>
                                <li> <a href="#grid.html"><span>Carsaaz</span></a> </li>
                              </ul>
                              <br />
                              <h3>Cooling</h3>
                              <ul className="nav">
                                <li> <a href="#grid.html"><span>Hoods</span></a> </li>
                                <li> <a href="#grid.html"><span>Bed Accessories</span></a> </li>
                                <li> <a href="#grid.html"><span>Body Kits</span></a> </li>
                                <li> <a href="#grid.html"><span>Custom Grilles</span></a> </li>
                              </ul>
                            </div>
                            <div className="col-md-4 has-sep hidden-sm">
                              <div className="custom-menu-right">
                                <div className="box-banner media">
                                  <div className="add-right"><img src="/images/menu-img2.jpg" alt="" /></div>
                                </div>
                                <div className="box-banner media">
                                  <div className="add-right"><img src="/images/menu-img3.jpg" alt="" /></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nosub"><a href="##">Suspension</a></li>
                    <li className="nosub"><a href="##">Breaks</a></li>
                    <li className="nosub"><a href="##">Transmission</a></li>
                    <li className="more-menu"> <a href="##">Exterior</a>
                      <div className="wrap-popup column1">
                        <div className="popup">
                          <ul className="nav">
                            <li><a href="#grid.html">Bed Accessories</a></li>
                            <li><a href="#grid.html">Body Kits</a></li>
                            <li><a href="#grid.html">Car Covers</a></li>
                            <li><a href="#grid.html">Off-Road Bumpers</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="more-menu"> <a href="##">Lighting</a>
                      <div className="wrap-popup column1">
                        <div className="popup">
                          <ul className="nav">
                            <li> <a href="#grid.html"> Fog Lights </a> </li>
                            <li> <a href="#grid.html"> Headlights</a> </li>
                            <li> <a href="#grid.html"> Led lights </a> </li>
                            <li> <a href="#grid.html"> Signal Lights </a> </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nosub"><a href="##">Other</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="our-features-box hidden-xs">
            <div className="features-block">
              <div className="col-lg-9 col-md-9 col-xs-12 col-sm-9 offer-block"> <a href="##">New Arrivals</a> <a href="##">Special</a> <a href="##">Value of the day</a> <a href="##">Gift Cards</a> <a href="##">Todays Deals</a> <span>Free Worldwide Delivery</span> </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Nav