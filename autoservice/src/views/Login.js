import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from 'components/navbar'
import Header from 'components/header'

const Login = (props) => {
  const history = useHistory()
  const [basket, setBasket] = useState([])
  const [auth, setAuthdata] = useState({ username: '', password: '' })
  // const [password, setPass] = useState('')
  useEffect(() => {
    if (!props.fetched) {
      // props.fetchRules();
    }
    const basketLocal = localStorage.getItem('basket')
    const newBasket = basketLocal ? JSON.parse(basketLocal) : []
    setBasket(newBasket)
  }, [])
  const onLogin = (e) => {
    e.preventDefault()
    if(auth.username=='basant' && auth.password=='garage'){
      localStorage.setItem('garage', 'Basant Motor')
      alert('Logged in as Basant Motor')
    }
    if(auth.username=='horizon' && auth.password=='garage'){
      localStorage.setItem('garage', 'Horizon Garage')
      alert('Logged in as Horizon Garage')
    }
    if(auth.username=='eastside' && auth.password=='garage'){
      localStorage.setItem('garage', 'Eastside Auto')
      alert('Logged in as Eastside Auto')
    }
    history.push('/garage')
  }
  const onChange = (e) => {
    const { name, value } = e.target
    const newAuth = { ...auth, [name]: value }
    setAuthdata(newAuth)
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
                <div className="account-login">
                  <div className="page-title">
                    <h2>Login or Create an Account</h2>
                  </div>
                  <fieldset className="col2-set">
                    <div className="col-1 new-users">
                      <strong>Login Cregentials</strong>
                      <div className="content">
                        <p>
                          <b>Garage:</b> <br />
                          - basant / garage <br />
                          - eastside / garage <br />
                          - horizon / garage <br />
                          <br />
                          <b>Admin:</b> <br />
                          - admin / admin <br />
                        </p>
                      </div>
                      <strong>New Customers</strong>
                      <div className="content">
                        <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                        <div className="buttons-set">
                          <button className="button create-account" type="button"><span>Create an Account</span></button>
                        </div>
                      </div>
                      <br />
                    </div>
                    <div className="col-2 registered-users"><strong>Registered Customers</strong>
                      <form className="content" onSubmit={onLogin}>
                        <p>If you have an account with us, please log in.</p>
                        <ul className="form-list">
                          <li>
                            <label for="email">Username <span className="required">*</span></label>
                            <input type="text" title="Email Address" className="input-text required-entry" id="email" value={auth.username} name="username" onChange={onChange} />
                          </li>
                          <li>
                            <label for="pass">Password <span className="required">*</span></label>
                            <input type="password" title="Password" id="pass" className="input-text required-entry validate-password" name="password" onChange={onChange} />
                          </li>
                        </ul>
                        <p className="required">* Required Fields</p>
                        <div className="buttons-set">
                          <button id="send2" name="send" type="submit" className="button login"><span>Login</span></button>
                          <a className="forgot-word" href="http://demo.magentomagik.com/computerstore/customer/account/forgotpassword/">Forgot Your Password?</a> </div>
                      </form>
                    </div>
                  </fieldset>
                </div>
              </article>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
export default Login