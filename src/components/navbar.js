import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
                <div className="mega-menu-category" style={{ display: menu ? 'block' : 'none' }}>
                  <ul className="nav">
                    <li> <Link to="/">Layout</Link>
                      <div className="wrap-popup column1">
                        <div className="popup">
                          <ul className="nav">
                            <li><Link to="/">Home Version 1</Link></li>
                            <li><Link href="/">Home Version 2</Link></li>
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
                                <li><a href="#grid"><span>Grid</span></a> </li>
                                <li> <a href="#list"> <span>List</span> </a> </li>
                                <li> <a href="#product_detail"> <span>Product Detail</span> </a> </li>
                                <li> <a href="#shopping_cart"> <span>Shopping Cart</span> </a> </li>
                                <li><a href="#checkout"><span>Checkout</span></a> </li>
                                <li> <a href="#wishlist"> <span>Wishlist</span> </a> </li>
                              </ul>
                            </div>
                            <div className="col-sm-6 has-sep">
                              <ul className="nav">
                                <li> <a href="#dashboard"> <span>Dashboard</span> </a> </li>
                                <li> <a href="#multiple_addresses"> <span>Multiple Addresses</span> </a> </li>
                                <li><a href="#compare"><span>Compare</span></a> </li>
                                <li><a href="#quick_view"><span>Quick View</span></a> </li>
                                <li><a href="#newsletter"><span>Newsletter</span></a> </li>
                                <li><a href="#404error"><span>404 Error Page</span></a> </li>
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
                                <li> <a href="#grid"><span>Amplifiers</span></a> </li>
                                <li> <a href="#grid"><span>Installation Parts</span></a> </li>
                                <li> <a href="#grid"><span>Speakers</span></a> </li>
                                <li> <a href="#grid"><span>Stereos</span></a> </li>
                              </ul>
                              <br />
                              <h3>Car Seat Covers</h3>
                              <ul className="nav">
                                <li> <a href="#grid">Custom Gauges</a> </li>
                                <li> <a href="#grid">Steering Wheels</a> </li>
                                <li> <a href="#grid">Sun Shades</a> </li>
                                <li> <a href="#grid">Leather</a> </li>
                              </ul>
                            </div>
                            <div className="col-md-4 col-sm-6 has-sep">
                              <h3>Lighting</h3>
                              <ul className="nav">
                                <li> <a href="#grid">Fog Lights</a> </li>
                                <li> <a href="#grid">Headlights</a> </li>
                                <li> <a href="#grid">Led lights</a> </li>
                                <li> <a href="#grid">Off-Road Lights</a> </li>
                              </ul>
                              <br />
                              <h3>Floor Mats</h3>
                              <ul className="nav">
                                <li> <a href="#grid">Tailored car</a> </li>
                                <li> <a href="#grid">Floor & cargo</a> </li>
                                <li> <a href="#grid">Leather flooring</a> </li>
                                <li> <a href="#grid">Smooth mats</a> </li>
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
                                <li> <a href="#grid">Bumpers</a> </li>
                                <li> <a href="#grid">Doors</a> </li>
                                <li> <a href="#grid">Fenders</a> </li>
                                <li> <a href="#grid">Grilles</a> </li>
                              </ul>
                              <br />
                              <h3>Performance</h3>
                              <ul className="nav">
                                <li> <a href="#grid"><span>Air Intake Systems</span></a> </li>
                                <li> <a href="#grid"><span>Exhaust Systems</span></a> </li>
                                <li> <a href="#grid"><span>Power Adders</span></a> </li>
                                <li> <a href="#grid"><span>Racing Gear</span></a> </li>
                              </ul>
                            </div>
                            <div className="col-md-4 col-sm-6 has-sep">
                              <h3>Car Safety</h3>
                              <ul className="nav">
                                <li> <a href="#grid"><span>Sun Protection</span></a> </li>
                                <li> <a href="#grid"><span>LCR Hallcrest</span></a> </li>
                                <li> <a href="#grid"><span>Fire Extinguisher</span></a> </li>
                                <li> <a href="#grid"><span>Carsaaz</span></a> </li>
                              </ul>
                              <br />
                              <h3>Cooling</h3>
                              <ul className="nav">
                                <li> <a href="#grid"><span>Hoods</span></a> </li>
                                <li> <a href="#grid"><span>Bed Accessories</span></a> </li>
                                <li> <a href="#grid"><span>Body Kits</span></a> </li>
                                <li> <a href="#grid"><span>Custom Grilles</span></a> </li>
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
                            <li><a href="#grid">Bed Accessories</a></li>
                            <li><a href="#grid">Body Kits</a></li>
                            <li><a href="#grid">Car Covers</a></li>
                            <li><a href="#grid">Off-Road Bumpers</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="more-menu"> <a href="##">Lighting</a>
                      <div className="wrap-popup column1">
                        <div className="popup">
                          <ul className="nav">
                            <li> <a href="#grid"> Fog Lights </a> </li>
                            <li> <a href="#grid"> Headlights</a> </li>
                            <li> <a href="#grid"> Led lights </a> </li>
                            <li> <a href="#grid"> Signal Lights </a> </li>
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
              <div className="col-lg-9 col-md-9 col-xs-12 col-sm-9 offer-block text-right">
                <Link to="/garage">Garage</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/login" style={{ margin: 0, padding: 0, border: 'none' }}>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Nav