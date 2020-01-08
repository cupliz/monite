import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from 'components/navbar'
import Header from 'components/header'
import Footer from 'components/footer'

const Admin = (props) => {
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
              </article>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default Admin