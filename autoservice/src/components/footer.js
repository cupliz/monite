import React from 'react'

const Footer = () => {
  return (

    <footer class="footer">

      <div class="newsletter-wrap">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="newsletter">
                <form>
                  <div>
                    <h4><span>Sign up to Newsletter</span></h4>
                    <input type="text" placeholder="Enter your email address" class="input-text" title="Sign up for our newsletter" id="newsletter1" name="email" />
                    <button class="subscribe" title="Subscribe" type="submit"><span>Subscribe</span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="footer-column pull-left">
                <h4>Shopping Guide</h4>
                <ul class="links">
                  <li><a href="blog" title="How to buy">Blog</a></li>
                  <li><a href="faq" title="FAQs">FAQs</a></li>
                  <li><a href="#" title="Payment">Payment</a></li>
                  <li><a href="#" title="Shipment">Shipment</a></li>
                  <li><a href="#" title="Where is my order?">Where is my order?</a></li>
                  <li><a href="#" title="Return policy">Return policy</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-column pull-left">
                <h4>Style Advisor</h4>
                <ul class="links">
                  <li><a href="login" title="Your Account">Your Account</a></li>
                  <li><a href="#" title="Information">Information</a></li>
                  <li><a href="#" title="Addresses">Addresses</a></li>
                  <li><a href="#" title="Addresses">Discount</a></li>
                  <li><a href="#" title="Orders History">Orders History</a></li>
                  <li><a href="#" title="Order Tracking">Order Tracking</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-column pull-left">
                <h4>Information</h4>
                <ul class="links">
                  <li><a href="sitemap" title="Site Map">Site Map</a></li>
                  <li><a href="#" title="Search Terms">Search Terms</a></li>
                  <li><a href="#" title="Advanced Search">Advanced Search</a></li>
                  <li><a href="about_us" title="About Us">About Us</a></li>
                  <li><a href="contact_us" title="Contact Us">Contact Us</a></li>
                  <li><a href="#" title="Suppliers">Suppliers</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <h4>Contact Us</h4>
              <div class="contacts-info">
                <address><i class="add-icon"></i>Harrier, 789 Main rd,<br /> Anytown, CA 12345 USA<br />
                </address>
                <div class="phone-footer"><i class="phone-icon"></i>+ 888 456-7890</div>
                <div class="email-footer"><i class="email-icon"></i><a href="mailto:support@example.com">support@harrier.com</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <div class="social">
                <ul>
                  <li class="fb"><a href="#"></a></li>
                  <li class="tw"><a href="#"></a></li>
                  <li class="googleplus"><a href="#"></a></li>
                  <li class="rss"><a href="#"></a></li>
                  <li class="pintrest"><a href="#"></a></li>
                  <li class="linkedin"><a href="#"></a></li>
                  <li class="youtube"><a href="#"></a></li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4 col-xs-12 coppyright">
              &copy; 2019 Auto Service Marketplace. All Rights Reserved.
      	</div>
            <div class="col-xs-12 col-sm-4">
              <div class="payment-accept">
                <img src="images/payment-1.png" alt="" />
                <img src="images/payment-2.png" alt="" />
                <img src="images/payment-3.png" alt="" />
                <img src="images/payment-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
export default Footer