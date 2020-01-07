import React from 'react'
const Testimonial = () => (
  <div className="testimonials">
    <div className="ts-testimonial-widget">
      <div className="slider-items-products">
        <div id="testimonials-slider" className="product-flexslider hidden-buttons home-testimonials">
          <div className="slider-items slider-width-col4 fadeInUp owl-carousel owl-theme" style={{ opacity: 1, display: 'block' }}>
            <div className="owl-item">
              <div className="holder">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lid est laborum dolo rumes fugats untras. dolore magna aliquam erat volutpat. Aenean est auctorwisiet urna...</p>
                <div className="testimonial-arrow-down"></div>
                <div className="thumb">
                  <div className="customer-img"> <img src="/images/member2.png" alt="Saraha Smith" /> </div>
                  <div className="customer-bio"> <strong className="name">Saraha Smith</strong> <span>Happy Customer</span> </div>
                </div>
              </div>
            </div>
            <div className="owl-item">
              <div className="holder">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lid est laborum dolo rumes fugats untras. dolore magna aliquam erat volutpat. Aenean est auctorwisiet urna...</p>
                <div className="testimonial-arrow-down"></div>
                <div className="thumb">
                  <div className="customer-img"> <img src="/images/member1.png" alt="Stephen Doe" /> </div>
                  <div className="customer-bio"> <strong className="name">Stephen Doe</strong> <span>Happy Customer</span> </div>
                </div>
              </div>
            </div>
            <div className="owl-item">
              <div className="holder">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lid est laborum dolo rumes fugats untras. dolore magna aliquam erat volutpat. Aenean est auctorwisiet urna...</p>
                <div className="testimonial-arrow-down"></div>
                <div className="thumb">
                  <div className="customer-img"> <img src="/images/member3.png" alt="Mark doe" /> </div>
                  <div className="customer-bio"> <strong className="name">Mark doe</strong> <span>Happy Customer</span> </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
  </div>
)
export default Testimonial