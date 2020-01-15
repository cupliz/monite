import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ basket }) => {
  const [toggleCat, setToggleCat] = useState(false)
  const [searchCategory, setSearchCategory] = useState('Categories')
  const getTotal = () => {
    const total = basket.reduce(function (a, b) {
      return a + b.price
    }, 0)
    return total
  }
  const search = (e) => {
    e.preventDefault()
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 logo-block">
          <div className="logo"> <Link title="Harrier" to="/"><img alt="Harrier" src="/images/logo.png" /> </Link> </div>
        </div>
        <div className="col-lg-7 col-md-6 col-sm-6 col-xs-3 hidden-xs category-search-form">
          <div className="contact-row">
          </div>
          <div className="search-box" style={{ marginTop: 60 }}>
            <form id="search_mini_form" onSubmit={search}>
              <input id="search" type="text" name="q" placeholder="Search entire store here..." className="searchbox" maxLength="128" />
              <ul className="categories-filter animate-dropdown">
                <li className={`dropdown ${toggleCat ? 'open' : ''}`}>
                  <a className="dropdown-toggle" onClick={() => setToggleCat(!toggleCat)}>{searchCategory} <b className="caret"></b></a>
                  <ul className="dropdown-menu" role="menu" >
                    <li role="presentation"><a role="menuitem" tabIndex="-1" onClick={() => setSearchCategory('Dealer')}>- Dealer</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" onClick={() => setSearchCategory('Service')}>- Service</a></li>
                    {/* <li className="menu-header">Dealer</li> */}
                    {/* <li role="presentation"><a role="menuitem" tabIndex="-1">- Dealer</a></li> */}
                  </ul>
                </li>
              </ul>
              <button type="submit" title="Search" className="search-btn-bg" id="submit-button"></button>
            </form>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12 card_wishlist_area">
          <div className="mm-toggle-wrap">
            <div className="mm-toggle"><i className="fa fa-align-justify"></i><span className="mm-label">Menu</span> </div>
          </div>
          <div className="top-cart-contain">
            <div className="mini-cart">
              <div data-toggle="dropdown" data-hover="dropdown" className="basket dropdown-toggle"> <a href="#shopping_cart"><span>Shopping Cart</span> <span className="cart_count">{basket.length}</span>
                <div className="price">{getTotal()}</div>
              </a> </div>
              <div>
                <div className="top-cart-content">
                  <ul className="mini-products-list" id="cart-sidebar">
                    <li className="item first">
                      <div className="item-inner"> <a className="product-image" title="Assembly Rcoker Arm Intake Interior Product" href="##l"><img alt="Assembly Rcoker Arm Intake Interior Product" src="products-images/product1.jpg" /> </a>
                        <div className="product-details">
                          <div className="access"><a className="btn-remove1" title="Remove This Item" href="##">Remove</a>  </div>
                          <p className="product-name"><a href="##">Assembly Rcoker Arm Intake Interior Product</a> </p>
                          1 x <span className="price">$179.99</span>
                        </div>
                      </div>
                    </li>
                    <li className="item last">
                      <div className="item-inner"> <a className="product-image" title="Assembly Rcoker Arm Intake Interior Product" href="#product_detail"><img alt="Assembly Rcoker Arm Intake Interior Product" src="products-images/product3.jpg" /> </a>
                        <div className="product-details">
                          <div className="access"><a className="btn-remove1" title="Remove This Item" href="##">Remove</a>  </div>
                          <p className="product-name"><a href="##">Assembly Rcoker Arm Intake Interior Product</a> </p>
                          1 x <span className="price">$80.00</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="actions">
                    <button className="btn-checkout" title="Checkout" type="button"><span>Checkout</span> </button>
                    <a href="#shopping_cart" className="view-cart"><span>View Cart</span></a> </div>
                </div>
              </div>
            </div>
            <div id="ajaxconfig_info"> <a href="##/"></a>
              <input value="" type="hidden" />
              <input id="enable_module" value="1" type="hidden" />
              <input className="effect_to_cart" value="1" type="hidden" />
              <input className="title_shopping_cart" value="Go to shopping cart" type="hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Header