import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from 'components/navbar'
import Header from 'components/header'
import Footer from 'components/footer'

const Garage = (props) => {
  const [basket, setBasket] = useState([])
  const [garage, setGarage] = useState('')
  const [accepted, setAccepted] = useState([])
  let history = useHistory()
  useEffect(() => {
    if (!props.fetched) { }
    const basketLocal = localStorage.getItem('basket')
    const newBasket = basketLocal ? JSON.parse(basketLocal) : []
    setBasket(newBasket)

    const garageLocal = localStorage.getItem('garage')
    setGarage(garageLocal)

    const acceptedLocal = localStorage.getItem('accepted')
    const acceptedOrder = acceptedLocal ? JSON.parse(acceptedLocal) : []
    setAccepted(acceptedOrder)
  }, [])
  const acceptOrder = (order) => {
    const newBasket = [...basket]
    const filteredBasket = newBasket.filter(b => b.id !== order.id)
    setBasket(filteredBasket)
    localStorage.setItem('basket', JSON.stringify(filteredBasket))
    const newAccepted = [...accepted, order]
    setAccepted(newAccepted)
    localStorage.setItem('accepted', JSON.stringify(newAccepted))
  }
  return (
    <div id="page">
      <Header basket={basket} />
      <Navbar />

      <section className="main-container col1-layout">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <article className="col-main">
                <div className="cart">
                  <div className="page-title"> <h2>Orders From Client</h2> </div>
                  <div className="table-responsive">
                    <div>
                      <fieldset>
                        <table className="data-table cart-table" id="shopping-cart-table">
                          <colgroup>
                            <col width="1" />
                            <col />
                            <col width="1" />
                            <col width="1" />
                            <col width="1" />
                            <col width="1" />
                            <col width="1" />
                          </colgroup>
                          <thead>
                            <tr className="first last">
                              <th rowSpan="1">&nbsp;</th>
                              <th rowSpan="1"><span className="nobr">Product Name</span></th>
                              <th rowSpan="1"></th>
                              <th colSpan="1" className="a-center">Subtotal</th>
                              <th className="a-center" rowSpan="1">&nbsp;</th>
                            </tr>
                          </thead>
                          <tbody>

                            {basket.length ? basket.map((b, i) => {
                              if (b.dealer == garage) {
                                return (
                                  <tr className="first odd" key={i}>
                                    <td className="image"><a className="product-image" title="Sample Product" href="#/">
                                      <img width="75" alt="Sample Product" src={`products-images/${b.image}`} /></a>
                                    </td>
                                    <td><h2 className="product-name"> <a href="#/">{b.task}</a> </h2></td>
                                    <td className="a-center"><a title="Edit item parameters" className="edit-bnt" href="##configure/id/15945/"></a></td>
                                    <td className="a-right movewishlist"><span className="cart-price"> <span className="price">${b.price}.00</span> </span></td>
                                    <td className="a-center last"><button className="button" onClick={() => acceptOrder(b)}>Accept</button></td>
                                  </tr>
                                )
                              }
                            }
                            ) : <h3 className="text-muted text-center">empty</h3>}
                          </tbody>
                        </table>
                      </fieldset>
                    </div>
                  </div>

                  <div className="page-title" style={{marginTop:20}}> <h2>Accepted Order</h2> </div>
                  <div className="table-responsive">
                    <div>
                      <fieldset>
                        <table className="data-table cart-table" id="shopping-cart-table">
                          <colgroup>
                            <col width="1" />
                            <col />
                            <col width="1" />
                            <col width="1" />
                            <col width="1" />
                            <col width="1" />
                            <col width="1" />
                          </colgroup>
                          <thead>
                            <tr className="first last">
                              <th rowSpan="1">&nbsp;</th>
                              <th rowSpan="1"><span className="nobr">Product Name</span></th>
                              <th rowSpan="1"></th>
                              <th colSpan="1" className="a-center">Subtotal</th>
                              <th className="a-center" rowSpan="1">&nbsp;</th>
                            </tr>
                          </thead>
                          <tbody>

                            {accepted.length ? accepted.map((b, i) => {
                              if (b.dealer == garage) {
                                return (
                                  <tr className="first odd" key={i}>
                                    <td className="image"><a className="product-image" title="Sample Product" href="#/">
                                      <img width="75" alt="Sample Product" src={`products-images/${b.image}`} /></a>
                                    </td>
                                    <td><h2 className="product-name"> <a href="#/">{b.task}</a> </h2></td>
                                    <td className="a-center"><a title="Edit item parameters" className="edit-bnt" href="##configure/id/15945/"></a></td>
                                    <td className="a-right movewishlist"><span className="cart-price"> <span className="price">${b.price}.00</span> </span></td>
                                  </tr>
                                )
                              }
                            }
                            ) : <h3 className="text-muted text-center">empty</h3>}
                          </tbody>
                        </table>
                      </fieldset>
                    </div>
                  </div>


                  <div className="crosssel">
                    <div className="new_title">
                      <h2>you may be interested</h2>
                    </div>
                    <div className="category-products">
                      <ul className="products-grid">
                        <li className="item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                          <div className="item-inner">
                            <div className="item-img">
                              <div className="item-img-info">
                                <a className="product-image" title="Retis lapen casen" href="#product_detail">
                                  <img alt="Retis lapen casen" src="products-images/product5.jpg" />
                                </a>

                                <div className="box-hover">
                                  <ul className="add-to-links">
                                    <li><a className="link-quickview" href="#quick_view"></a> </li>
                                    <li><a className="link-wishlist" href="#wishlist"></a> </li>
                                    <li><a className="link-compare" href="#compare"></a> </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="item-info">
                              <div className="info-inner">
                                <div className="item-title"> <a title="Retis lapen casen" href="#product_detail"> Assembly Rcoker Arm Intake Interior Product </a> </div>
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

                        <li className="item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                          <div className="item-inner">
                            <div className="item-img">
                              <div className="item-img-info"> <a className="product-image" title="Retis lapen casen" href="#product_detail"> <img alt="Retis lapen casen" src="products-images/product15.jpg" /> </a>

                                <div className="box-hover">
                                  <ul className="add-to-links">
                                    <li><a className="link-quickview" href="#quick_view"></a> </li>
                                    <li><a className="link-wishlist" href="#wishlist"></a> </li>
                                    <li><a className="link-compare" href="#compare"></a> </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="item-info">
                              <div className="info-inner">
                                <div className="item-title"> <a title="Retis lapen casen" href="#product_detail"> Assembly Rcoker Arm Intake Interior Product </a> </div>
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
                        <li className="item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                          <div className="item-inner">
                            <div className="item-img">
                              <div className="item-img-info"> <a className="product-image" title="Retis lapen casen" href="#product_detail"> <img alt="Retis lapen casen" src="products-images/product12.jpg" /> </a>
                                <div className="sale-label sale-top-left">- 49% Sale</div>
                                <div className="box-hover">
                                  <ul className="add-to-links">
                                    <li><a className="link-quickview" href="#quick_view"></a> </li>
                                    <li><a className="link-wishlist" href="#wishlist"></a> </li>
                                    <li><a className="link-compare" href="#compare"></a> </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="item-info">
                              <div className="info-inner">
                                <div className="item-title"> <a title="Retis lapen casen" href="#product_detail">Assembly Rcoker Arm Intake Interior Product</a> </div>
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
                        <li className="item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                          <div className="item-inner">
                            <div className="item-img">
                              <div className="item-img-info"> <a className="product-image" title="Retis lapen casen" href="#product_detail"> <img alt="Retis lapen casen" src="products-images/product2.jpg" /> </a>

                                <div className="box-hover">
                                  <ul className="add-to-links">
                                    <li><a className="link-quickview" href="#quick_view"></a> </li>
                                    <li><a className="link-wishlist" href="#wishlist"></a> </li>
                                    <li><a className="link-compare" href="#compare"></a> </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="item-info">
                              <div className="info-inner">
                                <div className="item-title"> <a title="Retis lapen casen" href="#product_detail">Assembly Rcoker Arm Intake Interior Product</a> </div>
                                <div className="brand">Sunproto</div>
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
                                    <div className="price-box"> <span className="regular-price"> <span className="price">$275.00</span> </span> </div>
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
              </article>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default Garage